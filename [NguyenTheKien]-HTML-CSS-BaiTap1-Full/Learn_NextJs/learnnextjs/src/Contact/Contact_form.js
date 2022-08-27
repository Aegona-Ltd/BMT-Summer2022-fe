import styles from '../../styles/components/contact.module.scss';
import { Form, Input, Button, Typography, Layout, Row, Col, notification, Space } from 'antd';
import { realtimeDB as db } from "../todoList/connectFireBase/config";
import { LoginOutlined } from "@ant-design/icons";
import axios from 'axios';
import 'antd/dist/antd.min.css';
import React, { useState, useEffect } from "react";
import get from "lodash/get";
import {arr1} from "./Arr_contact/arr_contact";

function Home() {
    const [nameInput, setnameInput] = useState("top");

    const check_name = [
        {
            required: true,
            message: "Bạn không được bỏ trống ở trường này.",
        },
        {
            min: 8,
            message: "Tên ít nhất 8 ký tự.",
        },
    ]
    const check_mail = [
        {
            required: true,
            message: "Bạn không được bỏ trống ở trường này.",
        },
        {
            type: "email",
            message: "Email sai định dạng.",
        },
    ]
    const check_phone = [
        {
            required: true,
            message: "Bạn không được bỏ trống ở trường này.",
        },
        {
            pattern: new RegExp(/^[0-9]+$/i),
            message: "Số điện thoại không hợp lệ",
        },
        {
            min: 9,
            message: "Số ít nhất 9 ký tự.",
        },
        
    ]

    //btn_submit
    const Submit = (value) => {
            db.ref('CONTACT/').push().set({
                name: value.Name,
                email: value.email,
                phone: value.phone,
                introduction: value.Introduction,
            }, function(error) {
                if (error) {
                    notification['error']({
                        message: 'Notification Title',
                        description:
                          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                      });
                    return;
                } else {
                    notification.info({
                        message: 'Thành công',
                        description:
                        'Bạn đã gửi thông tin thành công !',
                        nameInput,
                    });
                    return;
                }
              });
    }


    return (
        <div className={styles.contact_full}>
            <Row>
                <Col lg={12} md={24} xs={24} className={styles.contact_top}>
                    <h5>Xin Chào ! AEGONA có thể giúp gì cho bạn ?</h5>
                    <div className={styles.border_text}></div>
                    <Layout className={styles.full}>
                        <Form className="form_login"
                            name="signin"
                            initialValues={{
                                remember: false,
                            }}
                            onFinish={Submit}
                            autoComplete="off"
                        >
                            <div className={styles.zzz}>
                                <Form.Item
                                    name="Name"
                                    hasFeedback
                                    label="Họ & Tên"
                                    labelCol={{ span: 24 }}
                                    wrapperCol={{ span: 24 }}
                                    rules={check_name}
                                >
                                    <Input placeholder="Nhập tên của bạn" size="large" />
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    hasFeedback
                                    label="Email"
                                    labelCol={{ span: 24 }}
                                    wrapperCol={{ span: 24 }}
                                    rules={check_mail}
                                >
                                    <Input placeholder="Nhập Email của bạn" size="large" />
                                </Form.Item>

                                <Form.Item
                                    name="phone"
                                    hasFeedback
                                    label="Số Điện Thoại"
                                    labelCol={{ span: 24 }}
                                    wrapperCol={{ span: 24 }}
                                    rules={check_phone}
                                >
                                    <Input placeholder="Nhập SĐT của bạn" size="large" />
                                </Form.Item>

                                <Form.Item
                                    name="Introduction"
                                    hasFeedback
                                    label="Thông Tin"
                                    labelCol={{ span: 24 }}
                                    wrapperCol={{ span: 24 }}
                                    rules={[{
                                        required: true,
                                        message: "Bạn không được bỏ trống ở trường này.",
                                    }]}
                                >
                                    <Input.TextArea className="introduction" placeholder="Nhập thông tin cần tư vấn" size="large" />
                                </Form.Item>

                                <Button
                                    htmlType="submit"
                                    type="primary"
                                    // icon={<LoginOutlined />}
                                    size="large"
                                    style={{ backgroundColor: '#1478E7' }}>
                                    Gửi
                                </Button>
                            </div>
                        </Form>
                    </Layout>
                </Col>
                <Col lg={12} md={24} xs={24} className={styles.contact_center}>
                    {arr1.map((index , key) => {
                        return(
                    <Col span={24} className={styles.contact_center_bg} key={key}>
                        <div className={styles.icon}>
                            <i className={index.icon}></i>
                        </div>
                        <div className={styles.contact_center_bg_text}>
                            <div className={styles.contact_center_text}>{index.name}</div>
                            {index.text}
                        </div>
                    </Col>
                        );
                    })}
                </Col>
            </Row>
        </div>
    )
}

export default Home;