import React, { useState, useEffect } from "react";
import styles from "../../../styles/components/List_CRUD/Create.module.scss";
import { realtimeDB as db } from "../connectFireBase/config";
import { Input, Form, notification, Space } from 'antd';
import { storage as sr } from "../connectFireBase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const { TextArea } = Input;

function Create({ setOpenModal, soluong }) {
    const [nameInput, setnameInput] = useState("");
    const [collection, setCollection] = useState("");
    const [avatar, setAvatar] = useState();
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        //Nếu avatar không phải là undefined thì sẽ chạy  URL.revokeObjectURL để xoá ảnh trước đó , còn avt là undefined thì bỏ qua
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar]) // useEffect sẽ chạy thêm lần nữa khi mục avatar thay đổi

    const isValidFileUploaded = (file) => {
        const validExtensions = ['png', 'jpeg', 'jpg']
        const fileExtension = file.type.split('/')[1]
        return validExtensions.includes(fileExtension)
    }

    //btn img
    const ClickSelectedFile = (e) => {

        const d = new Date();  //hàm tạo ngày và giờ
        // format date
        const datestring = ("0" + d.getDate()).slice(-2) + "_" + ("0" + (d.getMonth() + 1)).slice(-2) + "_" +
            d.getFullYear() + "_" + ("0" + d.getHours()).slice(-2) + "_" + ("0" + d.getMinutes()).slice(-2);

        // gọi type = files
        const file = e.target.files[0];

        //Gắn size ảnh và đuôi ảnh vào blob
        var blob = file.slice(0, file.size, file.type);

        // gọi blob vào để giữ cấu hình ảnh , sau đó đổi tên file
        const newFile = new File([blob], `${datestring + Math.floor(Math.random() * 1000)}.png`, { type: file.type });

        //Sau khi đổi tên thành công -> gắn ảnh vào preview để xem trước
        newFile.preview = URL.createObjectURL(newFile);

        //gắn newfile vào setAvatar
        setAvatar(newFile);
    }

    //btn Add
    const Add = () => {
        if (nameInput == "" || collection == "") {
            notification["error"]({
                message: 'Thông báo',
                description: 'Bạn chưa nhập dữ liệu trường "TÊN" hoặc "MÔ TẢ"',
            });
            return;
        }
        if (!avatar) {
            db.ref('CRUD/' + soluong).set({
                id: soluong,
                name: nameInput,
                collection: collection,
                url: "",
                nameimg: "",
            }, function (error) {
                if (error) {
                    notification["error"]({
                        message: 'Thông báo',
                        description:
                            'Lỗi kết nối database.',
                    });
                    return;
                } else {
                    return;
                }
            }
            );
            setOpenModal(false)
            return;
        } else {
            if (isValidFileUploaded(avatar)) {
                //Nhập ref từ phiên bản lưu trữ Firebase
                const storageRef = ref(sr, `/publicImage/${avatar.name}`);

                // Hàm uploadBytesResumable () chấp nhận tham chiếu bộ nhớ và tệp để tải lên
                const uploadTask = uploadBytesResumable(storageRef, avatar);

                //check trạng thái bằng hàm on
                uploadTask.on(
                    "state_changed",
                    // check tiến trình tải lên và trạng thái tải lên
                    (snapshot) => {
                        const percent = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );

                        // update progress
                        setPercent(percent);
                    },
                    // Nếu sai sẽ khai báo
                    (err) => {
                        notification["error"]({
                            message: 'Thông báo Lỗi',
                            description: err,
                        })
                    },

                    //Nếu thành công log ra url
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                            db.ref('CRUD/' + soluong).set({
                                id: soluong,
                                name: nameInput,
                                collection: collection,
                                url: url,
                                nameimg: avatar.name,
                            });
                            setOpenModal(false)
                        }, function (error) {
                            if (error) {
                                notification["error"]({
                                    message: 'Thông báo',
                                    description:
                                        'Lỗi kết nối database.',
                                });
                                return;
                            } else {
                                return;
                            }
                        }
                        );
                    }
                );
                return;
            } else {
                notification["error"]({
                    message: 'Thông báo',
                    description: 'Ảnh không đúng định dạng (Ảnh phải có đuôi ".jpg" hoặc ".png")',
                });
                return;
            }
        }

    }

    return (
        <div className={styles.full}>
            <div className={styles.modalBackground}>
                <div className={styles.modalContainer}>
                    <div className={styles.titleCloseBtn}>
                        <button
                            onClick={() => {
                                setOpenModal(false);
                            }}
                        >
                            X
                        </button>
                    </div>
                    <div className={styles.title}>
                        <h1>Thêm mới</h1>
                    </div>
                    <div className={styles.body}>
                        <Form.Item
                            className={styles.input}
                            label="Họ & Tên"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input placeholder="Nhập tên của bạn" size="large" onChange={(e) => setnameInput(e.target.value)} />
                        </Form.Item>
                        <input accept=".jpg, .png" style={{ width: '80%', marginBottom: '10px' }} className="form-control" type="file" onChange={(e) => ClickSelectedFile(e)}></input>
                        {avatar && <img src={avatar.preview} alt="" style={{ width: '30%' }}></img>}
                        <Form.Item
                            className={styles.input}
                            label="Mô tả"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <TextArea style={{ height: 120 }} placeholder="Nhập mô tả của bạn ..." size="large" onChange={(e) => setCollection(e.target.value)} />
                        </Form.Item>
                    </div>
                    <div className={styles.footer}>
                        <button onClick={() => setOpenModal(false)} className={styles.cancelBtn} > Huỷ </button>
                        <button onClick={() => Add()}>Thêm</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;