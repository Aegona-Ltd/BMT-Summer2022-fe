import styles from '../../../styles/components/List_CRUD/Table.module.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import BuildIcon from '@mui/icons-material/Build';
import { realtimeDB as db } from "../connectFireBase/config";
import React, { useEffect, useState } from 'react';
import { Pagination, AutoComplete, Input } from 'antd';
import Create from '../CRUD/Create';
import Delele from '../CRUD/Delete';
import Update from '../CRUD/Update';
import { VapingRooms } from '@mui/icons-material';

export default function Table() {
  const [value, setValue] = useState([]);
  const [pag, setPag] = useState({
    show: [],
    all: [],
    total: 0,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [checkId, setCheckId] = useState("");
  const [searchTeam, setSearchTeam] = useState("");

  const ref = db.ref("CRUD");
  useEffect(() => {
    // ref.on để lắng nghe và đọc dữ liệu của đường dẫn 
    // đối số "value" để đọc snapshot của nội dung (nôm na khi thay đổi sự kiện thì nó sẽ truy xuất trong snapshot bằng phương thức val)
    ref.on("value", snapshot => {
      setValue(snapshot.val());
      const a = snapshot.val();
      a && setPag({
        all: a,
        show: a.slice(0, 5),
        total: a.length,
      })
    })
  }, []);

  const options = [
    {
      value: 'Thế Kiên',
    },
    {
      value: 'Test',
    },
    {
      value: 'Kien',
    },
  ];

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

  //Phân trang number
  const pagenumberPagination = (page, pageSize) => {
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
   value && setPag({ show: pag.all.slice(start, end), all: value, total: value.length });
  }

 console.log(searchTeam);

  return (
    <div className={styles.table}>
      <div className="container">
        <div className={styles.table_wrapper}>
          <div className={styles.table_title}>
            <div className="row">
              <div className="col-sm-6">
                <h2>Danh Sách <b>FireBase</b></h2>
              </div>
              <div className={styles.inputSearch}>

                <AutoComplete
                  style={{
                    width: 250,
                  }}
                  options={options}
                  onSelect={setSearchTeam}
                  onSearch={setSearchTeam}
                >
                  <Input.Search size="large" placeholder="Bạn cần tìm gì" enterButton />
                </AutoComplete>

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
              {pag.show.length > 0 && pag.show.filter((index) => {           
                  if(searchTeam ==""){
                    return index;
                  }else if(index.name.toLowerCase().includes(searchTeam.toLowerCase())){
                    return index;
                  }else if(searchTeam === undefined){
                    return;
                  }
              }).map((index, a) => {
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
                      {!index.url ? null : <img className="card-img-top hover-shadow" src={index.url} alt="" style={{ width: "120px", height: "100%" }} />}
                    </td>
                    <td>{index.collection}</td>
                    <td>
                      <a className="edit" onClick={() => {
                        UpdateClick(index)
                      }}><i className={styles.BuildIcon} title="Sửa"><BuildIcon /></i></a>
                      <a className="delete" onClick={() => {
                        DeleteClick({
                          id: index.id,
                          name: index.name,
                          nameurl: index.nameimg,
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
      <div className={styles.Pagination}>
        <Pagination
          defaultCurrent={1}
          defaultPageSize={5}
          total={pag.total}
          showSizeChanger={true}
          pageSizeOptions={[5, 10, 15, 20]}
          onChange={pagenumberPagination}
        />
      </div>
      {modalOpen && <Create setOpenModal={setModalOpen} soluong={value && value.length || !value && 1} />}
      {modalDelete && <Delele setOpenModal={setModalDelete} OpenModal={modalDelete} id={checkId} />}
      {modalUpdate && <Update setOpenModal={setModalUpdate} id={checkId} />}
    </div>
  )
}
