import { Link } from "react-router-dom";
import { FaFacebookF } from 'react-icons/fa'
import Vector from "../../shared/assets/icon/Phone";
import Clock from "../../shared/assets/icon/Clock";

function HeaderTop() {
    return (
        <article className="header__top py-2">
            <div className="container h-100">
                <div className="row justify-content-between align-items-center h-100">
                    <div className="col-auto">
                        <div className="header__top-social">
                            <Link to="/" className="header__top-social-link">
                                <FaFacebookF />
                            </Link>
                            <Link to="/" className="header__top-social-link mx-2">
                                <FaFacebookF />
                            </Link>
                            <Link to="/" className="header__top-social-link">
                                <FaFacebookF />
                            </Link>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="row">
                            <div className="col-auto">
                                <Link to="/" className="header__top-contact">
                                    <span className="header__top-contact-icon">
                                        <Vector />
                                    </span>
                                    <span className="header__top-contact-title ms-2 me-1">
                                        Hotline
                                    </span>
                                    <span className="header__top-contact-text">
                                        1900 2021
                                    </span>
                                </Link>
                            </div>
                            <div className="col-auto">
                                <Link to="/" className="header__top-contact">
                                    <span className="header__top-contact-icon">
                                        <Clock />
                                    </span>
                                    <span className="header__top-contact-title ms-2 me-1">
                                        Giờ làm việc
                                    </span>
                                    <span className="header__top-contact-text">
                                        Thứ 2 - Thứ 6 : 8:00 - 17:00
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default HeaderTop;