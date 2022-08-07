import { Form, Input, Button, Checkbox, Typography, Layout, Tooltip } from "antd";
import { LoginOutlined, FacebookOutlined, GooglePlusOutlined, GithubOutlined } from "@ant-design/icons";
import 'antd/dist/antd.min.css';
import React from 'react';
import '../styles/Login.css';
const { Title } = Typography;
export default function Login() {
  const [form] = Form.useForm();
  const numbers = /[0-9]/g;
  const upperCaseLetters = /[A-Z]/g;
  const lowerCaseLetters = /[a-z]/g;
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
  const check_mail = [
    {
      required: true,
      message: "Please input your email.",
    },
    {
      type: "email",
      message: "Your email is invalid.",
    },
  ]
  const check_pass = [
    {
      required: true,
      message: "Please input your password.",
    },
    {
      min: 6,
      message: "Password must be minimum 6 characters.",
    },
    {
      pattern: numbers,
      message: "Please enter your number.",
    },
    {
      pattern: lowerCaseLetters,
      message: "Please enter lowercase characters (abc).",
    },
    {
      pattern: upperCaseLetters,
      message: "Please enter uppercase characters (ABC).",
    },
    {
      pattern: format,
      message: "Your password is not have special character.",
    },
  ]

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout className="full">
      <Form
        name="signin"
        form={form}
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="zzz">
          <Title level={2} className="text-center" style={{ color: '#284D66', fontWeight: "bold", }}>
            Sign in
          </Title>
          <div className="social-container">
            <Tooltip
              title="Google+"
              placement="bottom"
              color="#db4a39"
              key="#db4a39"
            >
              <div className="social google" >
                <GooglePlusOutlined />
              </div>
            </Tooltip>

            <Tooltip
              title="Facebook"
              placement="bottom"
              color="#4267B2"
              key="#4267B2"
            >
              <div className="social facebook">
                <FacebookOutlined />
              </div>
            </Tooltip>

            <Tooltip
              title="Github"
              placement="bottom"
              color="#0e76a8"
              key="#0e76a8"
            >
              <div className="social linkedin">
                <GithubOutlined />
              </div>
            </Tooltip>
          </div>

          <div className="option-text">or use your account</div>

          <Form.Item
            name="email"
            hasFeedback
            label="Email address"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={check_mail}
          >
            <Input placeholder="Email" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            hasFeedback
            label="Password"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={check_pass}
          >
            <Input.Password placeholder="Password" size="large" />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/#">
              Forgot password?
            </a>
          </Form.Item>

          <Button
            htmlType="submit"
            type="primary"
            icon={<LoginOutlined />}
            size="large"
            style={{ backgroundColor: '#22B080' }}>
            Sign In
          </Button>
        </div>
      </Form>
    </Layout>
  );
}