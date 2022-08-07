import { Form, Input, Button, Checkbox ,Typography ,Layout, Tooltip } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import 'antd/dist/antd.min.css';
import React  from 'react';
import '../styles/Login.css';
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
export default function Login() {
    return (

<>
<Layout>
   <Form>
          <Title level={2} className="text-center">
            Sign in
          </Title>
          <div className="social-container">
      <GoogleLogin
        clientId={config.socials.GOOGLE_CLIENT_ID}
        render={(renderProps) => (
          <Tooltip
            title="Google+"
            placement="bottom"
            color="#db4a39"
            key="#db4a39"
          >
            <div className="social google" onClick={renderProps.onClick}>
              <GooglePlusOutlined />
            </div>
          </Tooltip>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />

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
        title="LinkedIn"
        placement="bottom"
        color="#0e76a8"
        key="#0e76a8"
      >
        <div className="social linkedin">
          <LinkedinOutlined />
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
            rules={[
              {
                required: true,
                message: "Please input your email.",
              },
              {
                type: "email",
                message: "Your email is invalid.",
              },
            ]}
          >
            <Input placeholder="Email" size="large" />
          </Form.Item>
  
          <Form.Item
            name="password"
            hasFeedback
            label="Password"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please input your password.",
              },
              { min: 6, message: "Password must be minimum 6 characters." },
            ]}
          >
            <Input.Password placeholder="Password" size="large" />
          </Form.Item>
  
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
  
            <a className="login-form-forgot" href="#">
              Forgot password?
            </a>
          </Form.Item>
  
          <Button
            // loading={auth.loading}
            type="primary"
            htmlType="submit"
            shape="round"
            icon={<LoginOutlined />}
            size="large"
          >
            Sign In
          </Button>
        </Form>
  {/* <Header>Header</Header>
  <Layout>
    <Sider>Sider</Sider>
    <Content>Content</Content>
  </Layout>
  <Footer>Footer</Footer> */}
</Layout>
</>
    );
  }