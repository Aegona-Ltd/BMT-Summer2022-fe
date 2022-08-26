import styles from '../../../styles/components/contact.module.scss';

const arr1 = [
  {
    id: 1,
    icon: "bi bi-telephone",
    name: "Số Điện Thoại",
    text: <>
      <div className={styles.contact_center_text1}>Office: <a href='tel:+84 28 7109 2939'>028 7109 2939</a></div>
      <div className={styles.contact_center_text1}>Hotline 1: <a href='tel:+84 704 5500 73'>0704 5500 73</a></div>
      <div className={styles.contact_center_text1}>Hotline 2: <a href='tel:+84 914 518 869'>0914 518 869</a></div>
    </>
  },
  {
    id: 2,
    icon: "bi bi-envelope",
    name: "Email",
    text: <>
      <div className={styles.contact_center_text1}>contact@aegona.com</div>
    </>
  },
  {
    id: 3,
    icon: "bi bi-pin-map",
    name: "Địa Chỉ",
    text: <>
      <div className={styles.contact_center_text1}>Tầng 4, Tòa nhà QTSC 9
       <br></br>Khu Phần mềm Quang Trung
       <br></br>Phường Tân Chánh Hiệp, Quận 12
       <br></br>Thành phố Hồ Chí Minh</div>
    </>
  },
  {
    id: 4,
    icon: "bi bi-stopwatch",
    name: "Thời Gian Làm Việc",
    text: <>
      <div className={styles.contact_center_text1}>Thứ 2 – Thứ 6: 08:00 – 17:00</div>
    </>
  },
]

export {
  arr1
}