import 'antd/dist/antd.min.css';
import { Tooltip, Row, Col, Button } from "antd";
import { UserOutlined, FacebookOutlined, GooglePlusOutlined, LinkedinOutlined, PhoneOutlined, FieldTimeOutlined } from "@ant-design/icons";
import React from 'react';
import '../../../styles/Home.scss';

  const Footer = () => {
    return (
      <div className='dev_Footer'>
        <div className='Footer_top'>
        <Row >
          <Col className='Footer_top_Col_1' span={12}>
            <h1 className='h1_1'></h1>
            <div className='Footer_top_Col_1_text'>
            Giới thiệu chung
            <span> Website học tiếng anh</span>
            </div>
            <div className='Footer_top_Col_1_text1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
              <Button type="primary" className='Footer_top_Col_1_btn'>
                Đăng ký học ngay
              </Button>
              <Button type="primary" className='Footer_top_Col_1_btn1'>
                Dùng thử miễn phí
              </Button>
          </Col>
          <Col span={12}>
            <div className='background_Footer_top_Col_2_circle'></div>
            <div className='background_Footer_top_Col_2'>
            <div className='background_Footer_top_Col_2_v1'></div>
            </div>
            <div className='background_Footer_top_Col_2_v2'>
              <div className='background_Footer_top_Col_2_v2_1'></div>
            </div>
            <div className='background_Footer_top_Col_2_v3'></div>
            <div className='background_Footer_top_Col_2_v5'></div>
            <div className='background_Footer_top_Col_2_v4'></div>
          </Col>
          
        </Row>
        </div>
      </div>
    );
  };
  
  export default Footer;