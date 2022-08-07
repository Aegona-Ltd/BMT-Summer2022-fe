import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router";
import UserIcon from "../../shared/assets/icon/UserIcon";
import { logo } from "../../shared/assets/images";
import LinkNav from "../../shared/components/LinkNav";
import useCurrentUser from "../../shared/hooks/useCurrentUser";
import NavMobile from "../NavMobile";

function HeaderNav() {
    const [showNav, setShowNav] = useState<boolean>(true)
    const navigate = useNavigate()
    const currentUser = useCurrentUser()


    return (
        <>
            <nav className="header__nav py-lg-0 py-3">
                <div className="container h-100">
                    <div className="row g-0 h-100">
                        <div className="col-auto d-block d-lg-none">
                            <button onClick={() => setShowNav(!showNav)} className="header__nav-login-btn d-flex align-items-center">
                                <span className="header__nav-login-btn-icon">
                                    <FaBars />
                                </span>
                            </button>
                        </div>
                        <div className="col-lg-auto col">
                            <div className="header__nav-logo h-100">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col d-lg-block d-none">
                            <ul className="header__nav-list h-100">
                                <LinkNav to="/">
                                    Trang chủ
                                </LinkNav>
                                <LinkNav to="/hoc-va-on">
                                    Học & Ôn
                                </LinkNav>
                                <LinkNav to="/ve-chung-toi">
                                    Về chúng tôi
                                </LinkNav>
                                <LinkNav to="/san-pham">
                                    Sản phẩm
                                </LinkNav>
                                <LinkNav to="/thong-ke">
                                    Thống kê
                                </LinkNav>
                                <LinkNav to="/lien-he">
                                    Liên hệ
                                </LinkNav>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <div className="header__nav-login h-100 d-flex align-items-center">
                                {currentUser.id !== '' ?
                                    <span className="text-white">
                                        Hi, {currentUser.email}
                                    </span>
                                    :

                                    <button
                                        onClick={() => navigate('/login')}
                                        className="header__nav-login-btn d-flex align-items-center"
                                    >
                                        <span className="header__nav-login-btn-icon me-1">
                                            <UserIcon />
                                        </span>
                                        <span className="d-lg-block d-none">
                                            Đăng Nhập
                                        </span>
                                    </button>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
            <NavMobile
                showNav  = {showNav}
                onShow = {() => setShowNav(!showNav)}
            />
        </>
    );
}

export default HeaderNav;