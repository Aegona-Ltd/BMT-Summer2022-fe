import styles from '../../../styles/components/Table.module.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import BuildIcon from '@mui/icons-material/Build';

export default function Table() {
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
                                <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal">
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
                                <th>Name</th>
                                <th>Email</th>
                                <th>URL</th>
                                <th>Collection</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span className="custom-checkbox">
                                        <input type="checkbox" id="checkbox1" name="options[]" value="1"></input>
                                        <label htmlFor="checkbox1"></label>
                                    </span>
                                </td>
                                <td>Thomas Hardy</td>
                                <td>thomashardy@mail.com</td>
                                <td>89 Chiaroscuro Rd, Portland, USA</td>
                                <td>(171) 555-2222</td>
                                <td>
                                    <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className={styles.BuildIcon} title="Edit"><BuildIcon/></i></a>
                                    <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className={styles.RemoveCircleIcon} title="Delete"><RemoveCircleIcon/></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <!-- Edit Modal HTML --> */}
            {/* <div id="addEmployeeModal" className="modal fade">
  <div className="modal-dialog">
    <div className="modal-content">
      <form>
        <div className="modal-header">
          <h4 className="modal-title">Add Employee</h4>
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" required></input>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" required></input>
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea className="form-control" required></textarea>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" className="form-control" required></input>
          </div>
        </div>
        <div className="modal-footer">
          <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel">
          <input type="submit" className="btn btn-success" value="Add">
        </div>
      </form>
    </div>
  </div>
</div> */}
            {/* <!-- Edit Modal HTML --> */}
            {/* <div id="editEmployeeModal" className="modal fade">
  <div className="modal-dialog">
    <div className="modal-content">
      <form>
        <div className="modal-header">
          <h4 className="modal-title">Edit Employee</h4>
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" required>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" required>
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea className="form-control" required></textarea>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" className="form-control" required>
          </div>
        </div>
        <div className="modal-footer">
          <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel">
          <input type="submit" className="btn btn-info" value="Save">
        </div>
      </form>
    </div>
  </div>
</div> */}
            {/* <!-- Delete Modal HTML --> */}
            {/* <div id="deleteEmployeeModal" className="modal fade">
  <div className="modal-dialog">
    <div className="modal-content">
      <form>
        <div className="modal-header">
          <h4 className="modal-title">Delete Employee</h4>
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to delete these Records?</p>
          <p className="text-warning"><small>This action cannot be undone.</small></p>
        </div>
        <div className="modal-footer">
          <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel">
          <input type="submit" className="btn btn-danger" value="Delete">
        </div>
      </form>
    </div>
  </div>
</div> */}
        </div>

    )
}
