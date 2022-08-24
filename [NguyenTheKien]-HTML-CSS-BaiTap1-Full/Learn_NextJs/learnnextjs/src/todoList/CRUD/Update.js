import React, { useState, useEffect } from "react";
import styles from "../../../styles/components/List_CRUD/Create.module.scss";
import { realtimeDB as db } from "../connectFireBase/config";
import { Input, Form, notification, Space } from 'antd';
import { storage as sr } from "../connectFireBase/config";
import { ref, uploadBytesResumable, getDownloadURL, getStorage, deleteObject } from "firebase/storage";

const storage = getStorage();
const { TextArea } = Input;

function Create({ setOpenModal, id }) {
    const [nameInput, setnameInput] = useState(id.name);
    const [collection, setCollection] = useState(id.collection);
    const [avatar, setAvatar] = useState();
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    //btn img
    const ClickSelectedFile = (e) => {
        const d = new Date();
        const datestring = ("0" + d.getDate()).slice(-2) + "_" + ("0" + (d.getMonth() + 1)).slice(-2) + "_" +
            d.getFullYear() + "_" + ("0" + d.getHours()).slice(-2) + "_" + ("0" + d.getMinutes()).slice(-2);
        const file = e.target.files[0];
        var blob = file.slice(0, file.size, file.type);
        const newFile = new File([blob], `${datestring + Math.floor(Math.random() * 1000)}.png`, { type: file.type });
        newFile.preview = URL.createObjectURL(newFile);
        setAvatar(newFile);
    }

    //btn edit
    const Edit = () => {
        if (!avatar) {
            db.ref('CRUD/' + id.id).set({
                id: id.id,
                name: nameInput,
                collection: collection,
                url: id.url,
                nameimg: id.nameimg,
            }, function (error) {
                if (error) {
                    notification["error"]({
                        message: 'Thông báo',
                        description:
                            'Lỗi kết nối database.',
                    });
                    return;
                } else {
                    setnameInput("");
                    setCollection("");
                }
            });
            setOpenModal(false)
        } else {
              //Nếu tên hình ảnh "nameimg" trong database là rỗng thì chạy hàm này để update ảnh 
            if (!id.nameimg) {
                const storageRef = ref(sr, `/publicImage/${avatar.name}`);
                const uploadTask = uploadBytesResumable(storageRef, avatar);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const percent = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                        setPercent(percent);
                    },
                    (err) => {
                        notification["error"]({
                            message: 'Thông báo Lỗi Update Ảnh',
                            description: err,
                        })
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                            db.ref('CRUD/' + id.id).set({
                                id: id.id,
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

            } else {
                const desertRef = ref(storage, `/publicImage/${id.nameimg}`);
                deleteObject(desertRef).then(() => {
                    const storageRef = ref(sr, `/publicImage/${avatar.name}`);
                    const uploadTask = uploadBytesResumable(storageRef, avatar);
                    uploadTask.on(
                        "state_changed",
                        (snapshot) => {
                            const percent = Math.round(
                                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                            );
                            setPercent(percent);
                        },
                        (err) => {
                            notification["error"]({
                                message: 'Thông báo Lỗi Update Ảnh',
                                description: err,
                            })
                        },
                        () => {
                            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                                db.ref('CRUD/' + id.id).set({
                                    id: id.id,
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

                }).catch((error) => {
                    notification["error"]({
                        message: 'Thông báo lỗi xoá ảnh',
                        description: error,
                    });
                });

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
                        <h1>Sửa</h1>
                    </div>
                    <div className={styles.body}>
                        <Form.Item
                            className={styles.input}
                            label="Họ & Tên"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input placeholder="Nhập tên của bạn" size="large" defaultValue={id.name} onChange={(e) => setnameInput(e.target.value)}></Input>
                        </Form.Item>
                        <input accept=".jpg, .png" style={{ width: '80%', marginBottom: '10px' }} className="form-control" type="file" onChange={(e) => ClickSelectedFile(e)}></input>
                        <div style={{ marginLeft: '50px' }}>
                            {id.url && <img src={id.url} alt="" style={{ width: '30%' }}></img>}
                            <span style={{ marginLeft: '40px' }}>
                                {avatar && <span>
                                    {id.url && avatar && <i class="bi bi-arrow-right" style={{ color: 'rgb(230, 173, 50)' }}></i>}
                                    <span style={{ marginLeft: "40px" }}>
                                        <img src={avatar.preview} alt="" style={{ width: '30%' }}></img>
                                    </span>
                                </span>}
                            </span>
                        </div>
                        <Form.Item
                            className={styles.input}
                            label="Mô tả"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <TextArea style={{ height: 120 }} defaultValue={id.collection} placeholder="Nhập mô tả của bạn ..." size="large" onChange={(e) => setCollection(e.target.value)} />
                        </Form.Item>
                    </div>
                    <div className={styles.footer}>
                        <button onClick={() => setOpenModal(false)} className={styles.cancelBtn} > Huỷ </button>
                        <button onClick={() => Edit()}>SỬa</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;