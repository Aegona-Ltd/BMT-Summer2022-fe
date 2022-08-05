import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

function FooterBottom() {
    return (
        <article className="footer__bottom">
            <div className="container">
                <div className="footer__bottom-wrapper py-3">
                    <div className="row g-3">
                        <div className="col">
                            <span className="footer__bottom-text">
                                Coppyright &copy; 2020 EngStar - All Rights Reserved
                            </span>
                        </div>
                        <div className="col-lg-auto col-12">
                            <div className="row g-5">
                                <div className="col b-r">
                                    <div className="d-flex align-items-center">
                                        <Link to="/" className="header__top-social-link me-2">
                                            <FaFacebookF />
                                        </Link>
                                        <Link to="/" className="header__top-social-link me-2">
                                            <FaFacebookF />
                                        </Link>
                                        <Link to="/" className="header__top-social-link">
                                            <FaFacebookF />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <Link to="/" className="footer__bottom-text">
                                        Điều khoản & chính sách
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default FooterBottom;