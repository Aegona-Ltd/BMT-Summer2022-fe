import { Form, Input, Button, Typography, Layout} from "antd";
import { LoginOutlined } from "@ant-design/icons";
import axios from 'axios';
import 'antd/dist/antd.min.css';
import get from "lodash/get";
import React from 'react';
import '../../styles/Contact.css';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";
const { Title } = Typography;

  const Contact = () => {
    const check_name = [
      {
        required: true,
        message: "Bạn không được bỏ trống ở trường này.",
      },
      {
        min: 8,
        message: "Tên ít nhất 8 ký tự.",
      },
    ]
    const check_mail = [
      {
        required: true,
        message: "Bạn không được bỏ trống ở trường này.",
      },
      {
        type: "email",
        message: "Email sai định dạng.",
      },
    ]
    const check_phone = [
      {
        required: true,
        message: "Bạn không được bỏ trống ở trường này.",
      },
      {
        pattern: new RegExp(/^[0-9]+$/i),
        message: "Số điện thoại không hợp lệ",
      },
      {
        min: 9,
        message: "Số ít nhất 9 ký tự.",
      },
    ]

    //btn_submit
    const Submit = (value) => {

      const Url = 'https://jsonplaceholder.typicode.com/posts';
      axios({
        method: 'post',
        url: Url,
        data:{
          email: get(value, "email"),
          name: get(value, "Name"),
          phone: get(value, "phone"),
          introduction: get(value, "Introduction"),
        }
      })
      .then(data =>{
        return (
          console.log(data.data)
        )
      })
      .catch(err => console.error(err));
   }
    

  
    return (
      
      <div className="bg_contact_full">
        <Layout className="full">
      <Form className="form_login"
        name="signin"
        initialValues={{
          remember: false,
        }}
        onFinish={Submit}
        autoComplete="off"
      >
        <div className="zzz">
          <Title level={2} className="text-center" style={{ color: '#284D66', fontWeight: "bold", }}>
            Liên Hệ
          </Title>

          <div className="option-text">Bạn cần tư vấn hỗ trợ ?</div>

          <Form.Item
            name="Name"
            hasFeedback
            label="Họ & Tên"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={check_name}
          >
            <Input placeholder="Nhập tên của bạn" size="large" />
          </Form.Item>

          <Form.Item
            name="email"
            hasFeedback
            label="Email"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={check_mail}
          >
            <Input placeholder="Nhập Email của bạn" size="large" />
          </Form.Item>

          <Form.Item
            name="phone"
            hasFeedback
            label="Số Điện Thoại"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={check_phone}
          >
            <Input placeholder="Nhập SĐT của bạn" size="large" />
          </Form.Item>

          <Form.Item
            name="Introduction"
            hasFeedback
            label="Thông Tin"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[  {
              required: true,
              message: "Bạn không được bỏ trống ở trường này.",
            }]}
          >
            <Input.TextArea className="introduction" placeholder="Nhập thông tin cần tư vấn" size="large" />
          </Form.Item>

          <Button
            htmlType="submit"
            type="primary"
            icon={<LoginOutlined />}
            size="large"
            style={{ backgroundColor: '#1478E7' }}>
            Gửi
          </Button>
        </div>
      </Form>
    </Layout>
    <div className="map_contact">
    <div className='Footer_center2_Col2_background_map1'>
              <div className='Footer_center2_Col2_background_map'></div>
              <div className='Footer_center2_Col2_background_map_icon'>
                <div className='phone_2'>
                  <EnvironmentOutlined />
                </div>
              </div>
              <div className='Footer_center2_Col2_background_map_icon1'>
                <div className='phone_2'>
                  <MailOutlined />
                </div>
              </div>
              <div className='Footer_center2_Col2_background_map_icon2'>
                <div className='phone_2'>
                  <PhoneOutlined />
                </div>
              </div>
              <div className='Footer_center2_Col2_background_map_icon3'></div>
              <div className='Footer_center2_Col2_background_map_icon4'></div>
            </div>
            <iframe className='Footer_center2_Col2_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.442335757664!2d106.62410211477214!3d10.853922192268977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752963982e3445%3A0xff1227c46772895d!2sAegona%20Co.%2C%20Ltd!5e0!3m2!1svi!2s!4v1660705574741!5m2!1svi!2s"></iframe>
    </div>
      </div>
    );
  };
  
  export default Contact;