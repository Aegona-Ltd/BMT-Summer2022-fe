import { Form, Input, Button, InputNumber , Checkbox, Typography, Layout, Tooltip ,message} from "antd";
import { LoginOutlined } from "@ant-design/icons";
import 'antd/dist/antd.min.css';
import React from 'react';
import '../../styles/Contact.css';
const { Title } = Typography;

  const Contact = () => {
  
    return (
      
      <div className="bg_contact_full">
        <Layout className="full">
      <Form className="form_login"
        name="signin"
        // form={form}
        initialValues={{
          remember: false,
        }}
        // onFinish={onFinish}
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
            rules={[
              {
                required: true,
              },
            ]}
            // rules={check_mail}
          >
            <Input placeholder="Nhập tên của bạn" size="large" />
          </Form.Item>

          <Form.Item
            name="email"
            hasFeedback
            label="Email"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            // rules={check_mail}
          >
            <Input placeholder="Nhập Email của bạn" size="large" />
          </Form.Item>

          <Form.Item
            name="phone"
            hasFeedback
            label="Số Điện Thoại"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            // rules={check_mail}
          >
            <Input placeholder="Nhập SĐT của bạn" size="large" />
          </Form.Item>

          <Form.Item
            name="Introduction"
            hasFeedback
            label="Thông Tin"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            // rules={check_mail}
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