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
  const list = [
    {
      id: 1,
      icon: styles.main_top_2_row_col_circle,
      name: 'Học Bài',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      id: 2,
      icon: styles.main_top_2_row_col_circle_1,
      name: 'Ôn Bài',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      id: 3,
      icon: styles.main_top_2_row_col_circle_2,
      name: 'Tiến Độ',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
  ]

  const lienHe = [
    {
      id: 1,
      icon: "bi bi-telephone-fill",
      name: 'HOTLINE',
      title: '028 7109 2939',
    },
    {
      id: 2,
      icon: 'bi bi-envelope-fill',
      name: 'EMAIL',
      title: 'contact@aegona.com',
    },
    {
      id: 3,
      icon: 'bi bi-geo-alt-fill',
      name: 'ĐỊA CHỈ',
      title: 'Tòa nhà QTSC 9, Khu Phần mềm Quang Trung, P. Tân Chánh Hiệp, Quận 12, TP.HCM',
    },
  ]
  return (
    <div className={styles.main_full}>
      {/* Giới thiệu Chung */}
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

      {/* Vấn đề - Giải Pháp Học */}
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
          <Col lg={12} md={24} xs={24}>
            <div className={styles.main_top_1_right_bg}>
              <Col className={styles.main_top_1_right_bg_img} md={24} xs={24}>1</Col>
              <Col className={styles.main_top_1_right_bg_img_1} md={24} xs={24}>1</Col>
            </div>
          </Col>
        </Row>
      </div>

      {/*  */}
      <div className={styles.main_top_2}>
        <div className={styles.main_top_2_row_bg_dot}></div>
        <div className={styles.main_top_2_row_bg_dot1}></div>
        <Row className={styles.main_top_2_row}>
          {list.map((index, key) => {
            return (
              <Col lg={7} md={11} xs={24} className={styles.main_top_2_row_col} key={key}>
                <div className={styles.main_top_2_row_col_bg_top}></div>
                <div className={index.icon}></div>
                <div className={styles.main_top_2_row_col_text}>{index.name}</div>
                <div className={styles.main_top_2_row_col_text_1}>{index.title}</div>
              </Col>
            );
          })}
        </Row>
      </div>

      {/* Hình Ảnh */}
      <div className={styles.main_top_3}>
        <div className={styles.main_top_3_text}>Hình Ảnh Về AEGONA</div>
        <div className={styles.main_top_3_bg}></div>
        <Row className={styles.main_top_3_Row}>
          <Col lg={5} md={10} xs={24} className={styles.main_top_3_Row_Col}></Col>
          <Col lg={5} md={10} xs={24} className={styles.main_top_3_Row_Col}></Col>
          <Col lg={5} md={10} xs={24} className={styles.main_top_3_Row_Col}></Col>
          <Col lg={5} md={10} xs={24} className={styles.main_top_3_Row_Col}></Col>
        </Row>
      </div>

      {/* Liên hệ */}
      <div className={styles.main_top_4}>
        <div className={styles.main_top_4_header}>
          <div className={styles.main_top_4_text}>Liên Hệ Với AEGONA</div>
          <div className={styles.main_top_4_bg}></div>
        </div>
        <Row>
          <Col lg={12} md={24} xs={24} className={styles.main_top_4_left_bg}>
            {lienHe.map((index, key) => {
              return (
                <Col span={24} className={styles.main_top_4_left_bg_Col} key={key}>
                  <div className={styles.main_top_4_left_bg_Col_border}>
                    <i class={index.icon}></i>
                  </div>
                  <div className={styles.main_top_4_left_bg_text}>
                    <div className={styles.main_top_4_left_text_1}>{index.name}</div>
                    <div className={styles.main_top_4_left_title_1}>{index.title}</div>
                  </div>
                </Col>
              );
            })}
          </Col>
          <Col lg={12} md={24} xs={24}>d</Col>
        </Row>
      </div>

    </div>
  )
}
