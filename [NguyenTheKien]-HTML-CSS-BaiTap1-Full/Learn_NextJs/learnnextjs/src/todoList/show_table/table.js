import styles from '../../../styles/components/List_CRUD/Table.module.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import BuildIcon from '@mui/icons-material/Build';
import firebase from "../connectFireBase/config";
import { realtimeDB as db } from "../connectFireBase/config";
import React, { useEffect, useState } from 'react';
import Create from '../CRUD/Create';

export default function Table() {
  const [value, setValue] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const ref = db.ref("CRUD");
  useEffect(() => {
    ref.on("value", snapshot => {  // ref.on để lắng nghe sự thay đổi database
      setValue(snapshot.val());
    })
  }, [])
  return (
    <div className={styles.table}>
      <div className="container">
        <div className={styles.table_wrapper}>
          <div className={styles.table_title}>
            <div className="row">
              <div className="col-sm-6">
                <h2>List <b>Product</b></h2>
              </div>
              <div className="col-sm-6">
                <a className="btn btn-success" onClick={() => setModalOpen(true)}>
                  <i><AddCircleIcon /></i>
                  <span>Add New Collection</span></a>
                <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal">
                  <i><RemoveCircleIcon /></i>
                  <span>Delete</span></a>
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
                  <th scope="col">Name</th>
                  <th scope="col">URL</th>
                  <th scope="col">Collection</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {value.map((index, a) => {
                  return (
                    <tr key={a}>
                      <td>
                        <span className="custom-checkbox">
                          <input type="checkbox" id="checkbox1" name="options[]" value="1"></input>
                          <label htmlFor="checkbox1"></label>
                        </span>
                      </td>
                      <td>{index.name}</td>
                      <td >{index.url}</td>
                      <td>{index.collection}</td>
                      <td>
                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className={styles.BuildIcon} title="Edit"><BuildIcon /></i></a>
                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className={styles.RemoveCircleIcon} title="Delete"><RemoveCircleIcon /></i></a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
        </div>
      </div>
      {modalOpen && <Create setOpenModal={setModalOpen} />}
    </div>
  )
}
