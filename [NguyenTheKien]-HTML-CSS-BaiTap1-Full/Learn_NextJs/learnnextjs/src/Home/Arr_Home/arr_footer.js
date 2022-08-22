import styles from '../../../styles/home.module.scss';
import { Input } from 'antd';

const link_arr_1 = [
    {
        id: 1,
        class: "bi bi-envelope",
        name: 'Email',
        span: 'contact@aegona.com'
    },
    {
        id: 2,
        class: "bi bi-telephone",
        name: 'Hotline',
        span: '1900 2021 '
    },
    {
        id: 3,
        class: "bi bi-alarm",
        name: 'Giờ làm việc',
        span: 'Thứ 2 - Thứ 6 : 08:00 - 17:00'
    },
]

const link_arr_2 = [
    {
        name: 'AEGO',
        name2: 'NA',
        class_r1: styles.footer_center_text,
        class_r2: '',
        dulieu: [
            {
                icon: "bi bi-telephone-fill",
                title: '028 7109 2939',
            },
            {
                icon: "bi bi-envelope-fill",
                title: 'contact@aegona.com',
            },
            {
                icon: "bi bi-geo-alt-fill",
                title: 'Lầu 4, Tòa nhà QTSC9 công viên phần mềm Quang Trung, Quận 12, Tp.HCM',
            },
        ]
    },
    {
        name: 'ABC',
        name2: '',
        class_r1: styles.footer_center_text_1,
        class_r2: styles.footer_center_border,
        dulieu: [
            {
                icon: "bi bi-dot",
                title: 'Thông tin học thuật',
            },
            {
                icon: "bi bi-dot",
                title: 'Hướng dẫn khóa học',
            },
            {
                icon: "bi bi-dot",
                title: 'Hướng dẫn đăng ký',
            },
            {
                icon: "bi bi-dot",
                title: 'Hướng dẫn thanh toán',
            },
        ]
    },
    {
        name: 'CDF',
        name2: '',
        class_r1: styles.footer_center_text_1,
        class_r2: styles.footer_center_border,
        dulieu: [
            {
                icon: "bi bi-dot",
                title: 'Trợ giúp',
            },
            {
                icon: "bi bi-dot",
                title: 'Bản quyền',
            },
            {
                icon: "bi bi-dot",
                title: 'Liên hệ',
            },
        ]
    },
    {
        name: 'Liên Hệ Tư Vấn',
        name2: '',
        class_r1: styles.footer_center_text_1,
        class_r2: styles.footer_center_border,
        dulieu: [
            {
                icon: "",
                title: <Input placeholder="Email của bạn" />
            },
            {
                icon: "",
                title: <button type="button" className="btn btn-warning">Gửi Email</button>
            },
        ]
    },
]

export {
    link_arr_1, link_arr_2
}