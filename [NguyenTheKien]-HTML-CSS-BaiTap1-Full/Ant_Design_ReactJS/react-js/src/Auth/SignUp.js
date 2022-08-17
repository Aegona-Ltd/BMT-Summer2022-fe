import { Form, Input, Button, Checkbox} from "antd";
import React from 'react';


const SignUp = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.442335757664!2d106.62410211477214!3d10.853922192268977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752963982e3445%3A0xff1227c46772895d!2sAegona%20Co.%2C%20Ltd!5e0!3m2!1svi!2s!4v1660705574741!5m2!1svi!2s" width="600" height="450"></iframe>
    </div>
  );
};

export default SignUp;