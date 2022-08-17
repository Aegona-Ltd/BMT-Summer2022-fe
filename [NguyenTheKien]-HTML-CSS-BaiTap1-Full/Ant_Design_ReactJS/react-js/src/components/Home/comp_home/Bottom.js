import 'antd/dist/antd.min.css';
import { Row, Col, AutoComplete, Button, Tooltip } from "antd";
import { MailOutlined, EnvironmentOutlined, PhoneOutlined, FieldTimeOutlined, FacebookOutlined, LinkedinOutlined, GooglePlusOutlined } from "@ant-design/icons";
import React from 'react';
import '../../../styles/Home.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Bottom = () => {
  return (
    <div className='dev_Bottom'>
      <Row className='emailBot'>
        <Col className='emailBot_Col' md={9} sm={24}>
          <div className='phone'>
            <MailOutlined />
          </div>
          <div className='hotline'>Email <span>contact@aegona.com</span></div>
        </Col>
        <Col className='emailBot_Col' md={6} sm={24}>
          <div className='phone'>
            <PhoneOutlined />
          </div>
          <div className='hotline'>Hotline <span>1900 2021</span></div>
        </Col>
        <Col className='emailBot_Col' md={9} sm={24}>
          <div className='phone'>
            <FieldTimeOutlined />
          </div>
          <div className='hotline'>Giờ làm việc <span>Thứ 2 - Thứ 6 : 08:00 - 17:00</span></div>
        </Col>
      </Row>
      <Row className='dev_bottom_center'>
        <Col className='emailBot_Col1' md={6} sm={24} xs={24}>
          <div className='res_bot'>
            <div className='aegona_bottom'>AEGO<span>NA</span></div>
            <div className='bottom_center_v1'>
              <div className='phone'>
                <PhoneOutlined />
              </div>
              <div className='hotline_bot'>028 7109 2939</div>
            </div>
            <div className='bottom_center_v2'>
              <div className='phone'>
                <MailOutlined />
              </div>
              <div className='hotline_bot'>contact@aegona</div>
            </div>
            <div className='bottom_center_v3'>
              <div className='phone'>
                <EnvironmentOutlined />
              </div>
              <div className='hotline_bot1'>Lầu 4, Toà nhà QTSC9 công viên phần mềm Quang Trung , Quận 12 , TP.HCM</div>
            </div>

          </div>
        </Col>
        <Col className='emailBot_Col1' md={6} sm={24} xs={24}>
          <div className='res_bot'>
            <div className='aegona_bottom1'>ABC</div>
            <div className='bottom_center_v1'>
              <li className='bottom_ul'>Thông tin học thuật</li>
            </div>
            <div className='bottom_center_v2'>
              <li className='bottom_ul'>Hướng dẫn khoá học</li>
            </div>
            <div className='bottom_center_v3'>
              <li className='bottom_ul'>Hướng dẫn đăng ký</li>
            </div>
            <div className='bottom_center_v4'>
              <li className='bottom_ul'>Hướng dẫn thanh toán</li>
            </div>
          </div>
        </Col>
        <Col className='emailBot_Col1' md={6} sm={24} xs={24}>
          <div className='res_bot'>
            <div className='aegona_bottom1'>CDF</div>
            <div className='bottom_center_v1'>
              <li className='bottom_ul'>Thông tin học thuật</li>
            </div>
            <div className='bottom_center_v2'>
              <li className='bottom_ul'>Hướng dẫn khoá học</li>
            </div>
            <div className='bottom_center_v3'>
              <li className='bottom_ul'>Hướng dẫn đăng ký</li>
            </div>
            <div className='bottom_center_v4'>
              <li className='bottom_ul'>Hướng dẫn thanh toán</li>
            </div>
          </div>
        </Col>
        <Col className='emailBot_Col1' md={6} sm={24} xs={24}>
          <div className='res_bot'>
            <div className='aegona_bottom2'>Liên Hệ Tư Vấn</div>
            <div className='bottom_center_v1'>
              <AutoComplete className='input-mail'
                style={{
                  width: 190,
                }}
                placeholder="Email của bạn"
              />
            </div>
            <div className='bottom_center_v2'>
              <Button type="primary" className='btn_email'>
                Gửi Email
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <div className='bottom_x1'>
        <Row className='bottom_x2'>
          <Col className='bottom_x2_v1' md={9} sm={24} xs={24}>Copyright © 2020 EngStar - All Rights Reserved</Col>

          <Col className='bottom_x2_v2' md={9} sm={24} xs={24}>
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
                <FontAwesomeIcon icon={faFacebookF} className="icon1" />
                </div>
              </Tooltip>

              <Tooltip
                title="linkedin"
                placement="bottom"
                color="#0e76a8"
                key="#0e76a8"
              >
                <div className="social linkedin" style={{ width: '23px', height: '23px' }}>
                <FontAwesomeIcon icon={faLinkedinIn} className="icon1" />
                </div>
              </Tooltip>
            </div>
            |  Điều khoản & chính sách</Col>
        </Row>
      </div>
    </div>
  );
};

export default Bottom;