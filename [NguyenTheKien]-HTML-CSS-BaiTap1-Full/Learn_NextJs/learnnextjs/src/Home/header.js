import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/home.module.scss';
import { Tooltip, Row, Col, Button } from 'antd';
import { UserOutlined, GooglePlusOutlined, PhoneOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/dist/client/link';
export default function HeaderHome() {
  return (
    <div className={styles.header_full}>
      {/*  */}
      <div className={styles.header_top}>
        <Row>
          <Col md={12}>
          <div className={styles.header_icon_top}>
                <Tooltip
                  title="Google+"
                  placement="bottom"
                  color="#db4a39"
                  key="#db4a39"
                >
                  <div className="social linkedin" style={{ width: '23px', height: '23px' }} >
                    <GooglePlusOutlined />
                  </div>
                </Tooltip>

                <Tooltip
                  title="Facebook"
                  placement="bottom"
                  color="#4267B2"
                  key="#4267B2"
                >
                  <div className="social linkedin" style={{ width: '23px', height: '23px' }}>
                    <FontAwesomeIcon icon={faFacebookF} className={styles.icon1} />
                  </div>
                </Tooltip>

                <Tooltip
                  title="linkedin"
                  placement="bottom"
                  color="#0e76a8"
                  key="#0e76a8"
                >
                  <div className="social linkedin" style={{ width: '23px', height: '23px' }}>
                    <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon1} />
                  </div>
                </Tooltip>
              </div>
          </Col>
          <Col md={12}>abc</Col>
        </Row>
      </div>

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
