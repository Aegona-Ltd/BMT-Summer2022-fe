import 'antd/dist/antd.min.css';
import { Row, Col, Button } from "antd";
import React from 'react';
import '../../../styles/Home.scss';

const Footer = () => {
  return (
    <div className='dev_Footer'>
      <div className='Footer_top'>
        <Row >
          <Col className='Footer_top_Col_1' span={12}>
            <div className='h1_1'></div>
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
            <div className='background_Footer_top_Col_2_circle'>
              <div className='background_Footer_top_Col_2_circle1'></div>
            </div>
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
        <div>
          <div className='background_Footer_top_Col_2_circle2'></div>
          <div className='background_Footer_top_Col_2_v2_2'></div>
          <div className='background_Footer_top_Rec_1'></div>
          <div className='Footer_top_Col_1_text_2'> Các vấn đề của người học & Giải pháp của AEGONA</div>
          <div className='background_Footer_top_Col_3_v2_1'></div>
        </div>
        <div className='cac_van_de_ng_hoc'></div>
        <div className='cac_van_de_ng_hoc_1'></div>
      </div>
      <div className='Footer_center'>
        <div className='Footer_center_dot'></div>
        <div className='Footer_center_dot2'></div>
        <Row className='Footer_center_Row'>
          <Col className='Footer_center_Col' span={6}>
            <div className='Footer_center_Col_Background_dot'></div>
            <div className='Footer_center_Col_Background_img_1'></div>
            <div className='Footer_center_Col_Background_text_1'>Học bài</div>
            <div className='Footer_center_Col_Background_text_1_v1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </Col>
          <Col className='Footer_center_Col' span={6}>
            <div className='Footer_center_Col_Background_dot'></div>
            <div className='Footer_center_Col_Background_img_2'></div>
            <div className='Footer_center_Col_Background_text_1'>Ôn bài</div>
            <div className='Footer_center_Col_Background_text_1_v1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </Col>
          <Col className='Footer_center_Col' span={6}>
            <div className='Footer_center_Col_Background_dot'></div>
            <div className='Footer_center_Col_Background_img_3'></div>
            <div className='Footer_center_Col_Background_text_1'>Tiến Độ</div>
            <div className='Footer_center_Col_Background_text_1_v1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;