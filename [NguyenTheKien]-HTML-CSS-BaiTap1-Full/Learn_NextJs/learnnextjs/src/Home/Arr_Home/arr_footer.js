import styles from '../../../styles/home.module.scss';

const link_arr_1 = [
    {
        id : 1,
        class : "bi bi-envelope",
        name : 'Email',
        span : 'contact@aegona.com'
    },
    {
        id : 2,
        class : "bi bi-telephone",
        name : 'Hotline',
        span : '1900 2021 '
    },
    {
        id : 3,
        class : "bi bi-alarm",
        name : 'Giờ làm việc',
        span : 'Thứ 2 - Thứ 6 : 08:00 - 17:00'
    },
]

const link_arr_2 = [
    {
        name : 'AEGO',
        name2 :'NA',
        class_r1 : styles.footer_center_text,
        class_r2 : '',
        dulieu : [
            {
                icon : "bi bi-telephone-fill",
                title : '028 7109 2939',
            }
        ]
    },
    {
        name : 'ABC',
        name2 :'',
        class_r1 : styles.footer_center_text_1,
        class_r2 : styles.footer_center_border,
        dulieu : [
            {
                icon : "bi bi-dot",
                title : 'Thông tin học thuật',
            }
        ]
    },
    {
        name : 'CDF',
        name2 :'',
        class_r1 : styles.footer_center_text_1,
        class_r2 : styles.footer_center_border,
        dulieu : [
            {
                icon : "bi bi-dot",
                title : 'Trợ giúp',
            }
        ]
    },
    {
        name : 'Liên Hệ Tư Vấn',
        name2 :'',
        class_r1 : styles.footer_center_text_1,
        class_r2 : styles.footer_center_border,
        dulieu : [
            {
                id: 1
            }
        ]
    },
]

export {
    link_arr_1 , link_arr_2
}