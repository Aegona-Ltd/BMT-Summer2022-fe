import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/home.module.scss';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Link from 'next/dist/client/link';
export default function HeaderHome() {
  return (
    <div className={styles.header_full}>
      {/*  */}
      <div className={styles.header_top}>a</div>

      {/*  */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid">
          <Link href="/">
              <a className="navbar-brand" style={{fontFamily:'Montserrat'}}><div style={{fontFamily:'Montserrat'}}>AEGO<span>NA</span></div></a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">TRANG CHỦ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">HỌC & ÔN</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">VỀ CHÚNG TÔI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">LIÊN HỆ</a>
              </li>
            </ul>
         
            <Button href='/login' className='abc' icon={<UserOutlined/>} size="large">
                  {/* <div>
                  <UserOutlined/>
                  </div> */}
                  Login
                </Button>
          </div>
        </div>
      </nav>
      
    </div>
  )
}
