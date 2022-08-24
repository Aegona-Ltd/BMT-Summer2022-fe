import { realtimeDB as db } from "../connectFireBase/config";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { notification, Modal } from 'antd';
import React, { useState } from 'react';

const storage = getStorage();
const Delele = ({setOpenModal , OpenModal , id}) => {

//btn xoá
  const handleOk = () => {
    //XOá hình ảnh trong stogare
  const desertRef = ref(storage, `/publicImage/${id.nameurl}`);
  deleteObject(desertRef).then(() => {
    //Xoá realtime databae
    db.ref('CRUD/' + id.id).remove();
    setOpenModal(false);
  }).catch((error) => {
    notification["error"]({
      message: 'Thông báo lỗi',
      description: error,
    });
  });
  };

  //btn huỷ
  const handleCancel = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Modal title="Xoá" visible={OpenModal} onOk={handleOk} onCancel={handleCancel}>
        <p>ID : {id.id}</p>
        <p>{id.name && `Bạn chắc chắn muốn xoá Tên :  ${id.name}`}</p>
      </Modal>
    </>
  );
};

export default Delele;