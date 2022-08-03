import { Link } from "react-router-dom";
import MailIcon from "../../shared/assets/icon/MailIcon";
import PhoneContactIcon from "../../shared/assets/icon/PhoneContactIcon";
import PlaceIcon from "../../shared/assets/icon/PlaceIcon";
import { logo } from "../../shared/assets/images";

function FooterCenter() {
    return (
        <article className="footer__center py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col">
                        <img src={logo} alt="" className="footer__center-logo d-block mb-4" />
                        <div className="d-flex mb-2">
                            <PhoneContactIcon size={15} color="rgb(255,204,0)" />
                            <span className="footer__center-text">
                                028 7109 2939
                            </span>
                        </div>
                        <div className="d-flex mb-2">
                            <MailIcon size={15} color="rgb(255,204,0)" />
                            <span className="footer__center-text">
                                contact@aegona.com
                            </span>
                        </div>
                        <div className="d-flex mb-2">
                            <PlaceIcon size={33} color="rgb(255,204,0)" />
                            <span className="footer__center-text">
                                Lầu 4, Tòa nhà QTSC9 công viên phần mềm Quang Trung, Quận 12, Tp.HCM
                            </span>
                        </div>
                    </div>
                    <div className="col">
                        <h4 className="mb-4 footer__center-title text-uppercase">
                            ABC
                        </h4>
                        <ul className="footer__center-list">
                            <li className="footer__center-item">
                                <Link to="/" className="footer__center-item-link mb-2">
                                    Thông tin học thuật
                                </Link>
                            </li>
                            <li className="footer__center-item">
                                <Link to="/" className="footer__center-item-link mb-2">
                                    Hướng dẫn khóa học
                                </Link>
                            </li>
                            <li className="footer__center-item">
                                <Link to="/" className="footer__center-item-link mb-2">
                                    Hướng dẫn đăng ký
                                </Link>
                            </li>
                            <li className="footer__center-item">
                                <Link to="/" className="footer__center-item-link">
                                    Hướng dẫn thanh toán
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4 className="mb-4 footer__center-title text-uppercase">
                            CDF
                        </h4>
                        <ul className="footer__center-list">
                            <li className="footer__center-item">
                                <Link to="/" className="footer__center-item-link mb-2">
                                    Trợ giúp
                                </Link>
                            </li>
                            <li className="footer__center-item">
                                <Link to="/" className="footer__center-item-link mb-2">
                                    Bản quyền
                                </Link>
                            </li>
                            <li className="footer__center-item">
                                <Link to="/" className="footer__center-item-link mb-2">
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4 className="mb-4 footer__center-title">
                            Liên Hệ Tư Vấn
                        </h4>
                        <input placeholder="Email của bạn" className="footer__center-input mb-2"/>
                        <button className="footer__center-btn">
                            Gửi email
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default FooterCenter;