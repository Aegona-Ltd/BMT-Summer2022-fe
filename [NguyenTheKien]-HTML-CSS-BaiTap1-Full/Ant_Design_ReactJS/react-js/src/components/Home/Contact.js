import { Form, Input, Button, Typography, Layout} from "antd";
import { LoginOutlined } from "@ant-design/icons";
import axios from 'axios';
import 'antd/dist/antd.min.css';
import get from "lodash/get";
import React from 'react';
import '../../styles/Contact.css';
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
      </div>
    );
  };
  
  export default Contact;