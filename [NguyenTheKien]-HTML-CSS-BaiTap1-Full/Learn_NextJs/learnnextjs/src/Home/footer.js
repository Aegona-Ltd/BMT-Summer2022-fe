import styles from '../../styles/home.module.scss';
import { Row, Col } from 'antd';
import { link_arr_1, link_arr_2 } from './Arr_Home/arr_footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
export default function FooterHome() {
  return (
    <div className={styles.footer_full}>
      <div>
        <Row>
          {link_arr_1.map((index, key) => {
            return (
              <Col md={8} xs={24} className={styles.footer_top} key={key}>
                <div>
                  <i className={index.class}></i>
                  {index.name}<span>{index.span}</span>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className={styles.footer_center_full}>
        <Row>
          {link_arr_2.map((index, key) => {
            return (
              <Col lg={6} md={11} xs={24} className={styles.footer_center} key={key}>
                <div className={index.class_r1}>{index.name}<span>{index.name2}</span></div>
                <div className={index.class_r2}></div>
                <div className={styles.footer_center_children}>
                  {index.dulieu.map((a, b) => {
                    return (
                      <Col lg={6} md={11} xs={24} key={b}>
                        <div className={styles.footer_center_icon_children}>
                          <i className={a.icon}></i> <span>{a.title}</span>
                        </div>
                      </Col>
                    )
                  })}
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
      <div className={styles.footer_bottom}>
        <Row>
          <Col lg={12} md={12} xs={24} className={styles.footer_bottom_Col_1}>Copyright ® 2020 EngStar - All Rights Reserved</Col>
          <Col lg={12} md={12} xs={24} className={styles.footer_bottom_Col_2}>
            <Col lg={5} md={10} className={styles.footer_bottom_Col_2_v1}>
                <div className={styles.footer_bottom_Col_2_v1_circle}>
                  <i className="bi bi-google"></i>
                </div>
                <div className={styles.footer_bottom_Col_2_v1_circle}>
                  <FontAwesomeIcon icon={faFacebookF} className={styles.icon2} />
                </div>
                <div className={styles.footer_bottom_Col_2_v1_circle}>
                  <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon2} />
                </div>
            </Col>
            <Col lg={6} md={12}>
              <div className={styles.footer_bottom_Col_2_v2}>Điều khoản & chính sách</div>
            </Col>
          </Col>
        </Row>
      </div>
    </div>
  )
}