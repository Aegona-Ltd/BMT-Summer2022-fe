import styles from '../../styles/home.module.scss';
import { Row, Col } from 'antd';
import { link_arr_1, link_arr_2 } from './Arr_Home/arr_footer';
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
                {index.dulieu.map((a , b) => {
                  return(
                    <Col lg={6} md={11} xs={24} key={b} className={styles.footer_center_children}>
                      <div className={styles.footer_center_icon_children}>
                        <i className={a.icon}></i> <span>{a.title}</span>
                      </div>
                    </Col>
                  )
                })}
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}