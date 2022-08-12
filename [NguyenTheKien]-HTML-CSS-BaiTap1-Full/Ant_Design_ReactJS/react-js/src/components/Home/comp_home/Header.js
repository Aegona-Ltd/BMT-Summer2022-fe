import 'antd/dist/antd.min.css';
import { Tooltip, Row, Col, Button } from "antd";
import { UserOutlined, FacebookOutlined, GooglePlusOutlined, LinkedinOutlined, PhoneOutlined, FieldTimeOutlined } from "@ant-design/icons";
import React from 'react';
import '../../../styles/Home.scss';
import { Link } from 'react-router-dom';
const Footer = () => {

  //Menu responsive
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "menuuuu") {
      x.className += " responsive";
    } else {
      x.className = "menuuuu";
    }
  }
  return (
    <div className='full_page'>
      <div className='header'>
        <Row gutter={24}>
          {/* Icon */}
          <Col className="gutter-row" md={12} sm={24}>
            <Col className="gutter-row1" md={12} sm={24}>
              <div className="social-container">
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
                    <FacebookOutlined />
                  </div>
                </Tooltip>

                <Tooltip
                  title="linkedin"
                  placement="bottom"
                  color="#0e76a8"
                  key="#0e76a8"
                >
                  <div className="social linkedin" style={{ width: '23px', height: '23px' }}>
                    <LinkedinOutlined />
                  </div>
                </Tooltip>
              </div>
            </Col>
          </Col>
          {/* header1_v2 */}
          <Col className="gutter-row" md={12} sm={24}>
            <div className='header1_v2'>
              <div className='phone_header'>
                <PhoneOutlined />
              </div>
              <div className='hotline_header'>Hotline<span>1900 2021</span></div>
              <div className='phone_111'>
                <FieldTimeOutlined />
              </div>
              <div className='hotline_111'>Giờ làm việc<span>Thứ 2 - Thứ 6 : 08:00 - 17:00</span></div>
            </div>
          </Col>
        </Row>
      </div>

      {/* header 2 */}
      <div className='header2'>

        <Row className='header2_v1'>
          <Col className='aegona' md={4} sm={24}>AEGO<span>NA</span></Col>
          <Col md={14} sm={24}>
            <div className='menuuuu' id="myTopnav">
              <ul className='nav-item'>
                <li><a className='navbarr' href="/#">TRANG CHỦ</a></li>
                <li><a className='navbarr' href="/#about">HỌC & ÔN</a></li>
                <li><a className='navbarr' href="/#users">VỀ CHÚNG TÔI</a></li>
                <li><a className='navbarr' href="/#users">LIÊN HỆ</a></li>
                <a href='/#' className="icon" onClick={() => myFunction()}>
                  <i className="fa fa-bars"></i>
                </a>
              </ul>
            </div>
          </Col>
        </Row>
        <Link to="/login">
          <Button type="primary" icon={<UserOutlined />} className='btn_Login'>
            Login
          </Button>
        </Link>
      </div>
    </div>

  );
};

export default Footer;