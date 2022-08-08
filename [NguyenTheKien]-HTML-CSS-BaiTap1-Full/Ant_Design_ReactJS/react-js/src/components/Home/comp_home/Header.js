import 'antd/dist/antd.min.css';
import React from 'react';
import '../../../styles/Home.css';

const Footer = () => {
  return (
    <div className='full_page'>
      <i class="bi bi-facebook"></i>
      <div className='header'>
        <div className='header_v1_1'>
        <div className="social-container">
            {/* <Tooltip
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
            </Tooltip> */}
          </div>
        </div>
      </div>
      <div className='header2'></div>
    </div>
    
  );
};

export default Footer;