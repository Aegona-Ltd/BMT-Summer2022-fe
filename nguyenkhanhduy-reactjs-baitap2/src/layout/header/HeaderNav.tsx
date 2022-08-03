import UserIcon from "../../shared/assets/icon/UserIcon";
import { logo } from "../../shared/assets/images";
import LinkNav from "../../shared/components/LinkNav";

function HeaderNav() {
    return (
        <nav className="header__nav">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-auto">
                        <div className="header__nav-logo h-100">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col">
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
                        </ul>
                    </div>
                    <div className="col-auto">
                        <div className="header__nav-login h-100 d-flex align-items-center">
                            <button className="header__nav-login-btn d-flex align-items-center">
                                <span className = "header__nav-login-btn-icon me-1">
                                    <UserIcon/>
                                </span>
                                Đăng Nhập
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default HeaderNav;