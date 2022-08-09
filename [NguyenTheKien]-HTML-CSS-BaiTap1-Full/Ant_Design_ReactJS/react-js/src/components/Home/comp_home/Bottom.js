import 'antd/dist/antd.min.css';
import { Row, Col } from "antd";
import { UserOutlined, FacebookOutlined, GooglePlusOutlined, LinkedinOutlined, PhoneOutlined, FieldTimeOutlined } from "@ant-design/icons";
import React from 'react';
import '../../../styles/Home.scss';

  const Bottom = () => {
    return (
      <div className='dev_Bottom'>
            <Row className='emailBot'>
            <Col className='emailBot_Col' span={9}>
            <div className='phone'>
                <PhoneOutlined />
              </div>
            <div className='hotline'>Hotline<span>1900 2021</span></div>
            </Col>
            <Col className='emailBot_Col' span={6}>col-8</Col>
            <Col className='emailBot_Col' span={9}>col-8</Col>
          </Row>
      </div>
    );
  };
  
  export default Bottom;