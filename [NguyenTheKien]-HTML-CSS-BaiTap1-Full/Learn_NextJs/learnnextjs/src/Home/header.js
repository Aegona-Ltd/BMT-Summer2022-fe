import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/home.module.scss';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
export default function HeaderHome() {
  return (
    <div className={styles.header_full}>
      {/*  */}
      <div className={styles.header_top}>a</div>
      
      {/*  */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">AEGONA</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">TRANG CHỦ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">HỌC & ÔN</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">VỀ CHÚNG TÔI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">LIÊN HỆ</a>
              </li>
            </ul>

            <Button className='abc' icon={<UserOutlined />} size="large">
                  Search
                </Button>
          </div>
        </div>
      </nav>
      
    </div>
  )
}
