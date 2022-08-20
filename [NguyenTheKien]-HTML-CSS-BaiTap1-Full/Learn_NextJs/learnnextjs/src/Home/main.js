import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../styles/home.module.scss';
import { Row, Col } from 'antd';
import { GooglePlusOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/dist/client/link';
export default function MainHome() {
  return (
    <div className={styles.main_full}>
      {/*  */}
      <div className={styles.main_top}>
        <Row>
          <Col lg={12} md={24} xs={24}>
            <div className={styles.main_top_text_left_bg}>
              <div className={styles.main_top_text_left_dot}></div>
              <div className={styles.main_top_text_left_text}>Giới Thiệu Chung
                <div className={styles.main_top_text_left_text_v1}>Website học tiếng anh</div>
              </div>
              <div className={styles.main_top_text_left_text1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
              <div className={styles.main_top_text_left_btn}>
                <button type="button" className="btn btn-warning">Đăng Ký Học Ngay</button>
                <a type="button" className="btn btn-outline-warning">Dùng Thử Miễn Phí</a>
              </div>
            </div>
          </Col>
          <Col lg={12} md={24} xs={24}>
            <div className={styles.main_top_text_right_bg}>
              <div className={styles.main_top_text_right_bg_circle}>
                <div className={styles.main_top_text_right_bg_circle_v1}>
                  <div className={styles.main_top_text_right_bg_color}>
                    <div className={styles.main_top_text_right_bg_dot}>
                      <div className={styles.main_top_text_right_img_1}>
                        <div className={styles.main_top_text_right_img_play}></div>
                        <div className={styles.main_top_text_right_img_2}></div>
                      </div>
                      <div className={styles.main_top_text_right_img_3}>
                        <div className={styles.main_top_text_right_img_4}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/*  */}
      <div className={styles.main_top_1}>
        <Row>
          <Col lg={12} md={24} xs={24}>
            <div className={styles.main_top_1_left_bg}>
              <div className={styles.main_top_1_left_bg_circle}></div>
              <div className={styles.main_top_1_left_bg_dot}></div>
                <div className={styles.main_top_1_left_bg_text}>
                  Các vấn đề của người học & Giải pháp của AEGONA
                </div>
                <div className={styles.main_top_1_left_bg_border}></div>
                <div className={styles.main_top_1_left_bg_img}></div>
            </div>
          </Col>
          <Col lg={12} md={24} xs={24}>abc</Col>
        </Row>
      </div>
    </div>
  )
}
