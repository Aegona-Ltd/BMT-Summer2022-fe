import { Form, Input, Button, Checkbox, Typography, Layout, Tooltip ,message} from "antd";
import { LoginOutlined, GooglePlusOutlined, GithubOutlined } from "@ant-design/icons";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios'
import 'antd/dist/antd.min.css';
import React, {useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/router'
import get from "lodash/get";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {  faFacebookF } from '@fortawesome/free-brands-svg-icons';

const { Title } = Typography;

export default function Login() {
  const navigate = useRouter();
  const [form] = Form.useForm();
  const [Recc , setRecc] = useState('');
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
  
  //Hàm Captcha
  var Recaptcha = (value) => {
    // console.log('Captcha : ', value);
    setRecc(value);
  }

//btn Login
  const onFinish = async (values) => {
    let key = 'check_key';
     if(Recc === '' || Recc === undefined || Recc === null){  //Check captcha
        message.error({
          content: 'No captchas yet .',
          key,
          duration: 1,   //time
        });
      return ;
     }else{
        const Account = {
          email: get(values, "email"),
          password: get(values, "password"),
          captcha:Recc,
        };
  
        const Url = 'https://jsonplaceholder.typicode.com/posts';
        axios({
          method: 'post',
          url: Url,
          data:{
            Account
          }
        })
        .then(data =>{
          return (
            console.log(data.data),
            navigate.push("/contact")
          )
        })
        .catch(err => console.error(err));
     }
  };

  return (
    <Layout className="fullbg">
      <Form className="form_login1"
        name="signin"
        form={form}
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
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
              <FontAwesomeIcon icon={faFacebookF} className="icon1" />
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

          <ReCAPTCHA className="ReCAPTCHA"
            sitekey="6LdmoUEhAAAAACqtptaVuYqUJ-mV7_vDEk-VKMIP"
            onChange={Recaptcha}
          />

          <Button
            htmlType="submit"
            type="primary"
            icon={<LoginOutlined />}
            size="large"
            style={{ backgroundColor: '#1478E7' }}>
            Sign In
          </Button>
        </div>
      </Form>
    </Layout>
  );
}