import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../styles/home.module.scss';
import { Row, Col } from 'antd';
import { GooglePlusOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { link } from './Arr_Home/arr_header';
import Link from 'next/link';
import NavBar from './nav_bar_mobile';
import React, {useState} from 'react';
export default function HeaderHome() {

  const [hideNavBar , setHideNavBar] = useState(false);

  return (
    <>
    <div className={styles.header_full}>
      {/* header_top */}
      <div className={styles.header_top}>
        <Row>
          <Col md={9} lg={15} sm={5}>
            <div className={styles.header_icon_top}>
              <div className={styles.header_icon_top_bg}>
                <GooglePlusOutlined />
              </div>
              <div className={styles.header_icon_top_bg}>
                <FontAwesomeIcon icon={faFacebookF} className={styles.icon1} />
              </div>
              <div className={styles.header_icon_top_bg}>
                <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon1} />
              </div>
            </div>
          </Col>
          <Col md={15} lg={9} sm={19}>
            <div className={styles.header_icon_right}>
              <Col md={8} sm={24}>
                <div className={styles.header_icon_right_phone}>
                  <i className="bi bi-telephone" />
                  <span className={styles.header_icon_right_text_right}>Hotline<span>1900 2021</span></span>
                </div>
              </Col>
              <Col md={16} sm={24}>
                <div className={styles.header_icon_right_phone}>
                  <i className="bi bi-alarm"></i>
                  <span className={styles.header_icon_right_text_right}>Giờ Làm Việc<span>Thứ 2 - Thứ 6 : 08:00 - 17:00</span></span>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
      {/* header_navbar */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" onClick={() => setHideNavBar(!hideNavBar)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link href="/">
            <a className="navbar-brand" style={{ fontFamily: 'Montserrat' }}><div style={{ fontFamily: 'Montserrat' }}>AEGO<span>NA</span></div></a>
          </Link>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              {link.map((a, b) => {
                return (
                  <li className="nav-item" key={b}>
                    <Link href={a.href}>
                      <a className={a.className}>{a.name}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <Link href='/Auth/login'>
            <a type="button" className="btn btn-warning" style={{ backgroundColor: 'white', borderColor: 'white' }}>
              <i className="bi bi-person-circle"></i> Đăng Nhập
            </a>
          </Link>
        </div>
      </nav>
    </div>
    {hideNavBar ? (<NavBar></NavBar>) : null}
    </>
  )
}
