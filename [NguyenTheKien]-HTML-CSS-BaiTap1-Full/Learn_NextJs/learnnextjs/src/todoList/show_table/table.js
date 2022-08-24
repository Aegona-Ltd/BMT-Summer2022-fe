import styles from '../../../styles/components/List_CRUD/Table.module.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import BuildIcon from '@mui/icons-material/Build';
import { realtimeDB as db } from "../connectFireBase/config";
import React, { useEffect, useState } from 'react';
import Create from '../CRUD/Create';
import Delele from '../CRUD/Delete';
import Update from '../CRUD/Update';

export default function Table() {
  const [value, setValue] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [checkId, setCheckId] = useState("");

  const ref = db.ref("CRUD");
  useEffect(() => {
    // ref.on để lắng nghe và đọc dữ liệu của đường dẫn 
    // đối số "value" để đọc snapshot của nội dung (nôm na khi thay đổi sự kiện thì nó sẽ truy xuất trong snapshot bằng phương thức val)
    ref.on("value", snapshot => {
      setValue(snapshot.val());
    })
  }, []);

  //icon delete
  const DeleteClick = (a) => {
    setCheckId(a);
    setModalDelete(true);
  }

  //icon update
  const UpdateClick = (a) => {
    setCheckId(a);
    setModalUpdate(true);
  }

  return (
    <div className={styles.table}>
      <div className="container">
        <div className={styles.table_wrapper}>
          <div className={styles.table_title}>
            <div className="row">
              <div className="col-sm-6">
                <h2>Danh Sách <b>FireBase</b></h2>
              </div>
              <div className="col-sm-6">
                <a className="btn btn-success" onClick={() => setModalOpen(true)}>
                  <i><AddCircleIcon /></i>
                  <span>Thêm mới</span></a>
                <a className="btn btn-danger">
                  <i><RemoveCircleIcon /></i>
                  <span>Xoá</span></a>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="selectAll"></input>
                      <label htmlFor="selectAll"></label>
                    </span>
                  </th>
                  <th scope="col">Tên</th>
                  <th scope="col">Hình Ảnh</th>
                  <th scope="col">Mô tả</th>
                  <th scope="col">Chức Năng</th>
                </tr>
              </thead>
              <tbody>
                {!value ? null  : value.map((index, a) => {
                  return (
                    <tr key={a}>
                      <td>
                        <span className="custom-checkbox">
                          <input type="checkbox" id="checkbox1" name="options[]" value="1"></input>
                          <label htmlFor="checkbox1"></label>
                        </span>
                      </td>
                      <td>{index.name}</td>
                      <td >
                        {!index.url ? null : <img className="card-img-top hover-shadow" src={index.url} alt="" style={{width:"120px", height:"100%"}}/>}
                      </td>
                      <td>{index.collection}</td>
                      <td>
                        <a  className="edit" onClick={() => {
                            UpdateClick(index)
                        }}><i className={styles.BuildIcon} title="Sửa"><BuildIcon /></i></a>
                        <a className="delete" onClick={() => {    
                              DeleteClick({
                                id: index.id,
                                name: index.name,
                                nameurl : index.nameimg,
                              })                   
                        }}><i className={styles.RemoveCircleIcon} title="Xoá"><RemoveCircleIcon /></i></a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
        </div>
      </div>
      {modalOpen && <Create setOpenModal={setModalOpen} soluong={value && value.length || !value && 1} />}
      {modalDelete && <Delele setOpenModal={setModalDelete} OpenModal={modalDelete} id={checkId}/>}
      {modalUpdate && <Update setOpenModal={setModalUpdate} id={checkId}/>}
    </div>
  )
}
