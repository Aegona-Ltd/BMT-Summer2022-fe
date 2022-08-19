import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../styles/home.module.scss';
import { Row, Col, Button } from 'antd';
import { UserOutlined, GooglePlusOutlined} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faPhoenixSquadron } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/dist/client/link';
export default function HeaderHome() {
  return (
    <div className={styles.header_full}>
      {/*  */}
      <div className={styles.header_top}>
        <Row>
          <Col md={9} lg={15} sm={5}>
          {/* <Col md={15}> */}
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
          {/* <Col md={9}> */}
            <div className={styles.header_icon_right}>
              <Col md={8} sm={24}>
              {/* <Col md={8}> */}
              <div className={styles.header_icon_right_phone}>
              <i class="bi bi-telephone"/>
                <span className={styles.header_icon_right_text_right}>Hotline<span>1900 2021</span></span>
              </div>
              </Col>
              <Col md={16} sm={24}>
              {/* <Col md={16}> */}
              <div className={styles.header_icon_right_phone}>
              <i class="bi bi-alarm"></i>
                <span className={styles.header_icon_right_text_right}>Giờ Làm Việc<span>Thứ 2 - Thứ 6 : 08:00 - 17:00</span></span>
              </div>
              </Col>
            </div>
          </Col>
        </Row>
      </div>

      {/*  */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand" style={{ fontFamily: 'Montserrat' }}><div style={{ fontFamily: 'Montserrat' }}>AEGO<span>NA</span></div></a>
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

            <button type="button" class="btn btn-warning">
            <i class="bi bi-person-circle"></i> Đăng Nhập
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
