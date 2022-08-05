import { logo } from "../../shared/assets/images";
import LinkNav from "../../shared/components/LinkNav";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Vector from "../../shared/assets/icon/Phone";
import Clock from "../../shared/assets/icon/Clock";

interface NavMobileI {
    showNav: boolean,
    onShow: () => void
}

function NavMobile(props: NavMobileI) {
    const { showNav, onShow } = props

    return (
        <>
            <div onClick={onShow} className={`overlay ${showNav ? 'active' : ''}`}></div>
            <section className={`navMobile ${showNav ? 'active' : ''}`}>
                <span onClick={onShow} className="navMobile__close p-1">
                    <IoCloseOutline size={30} color="#fff" />
                </span>
                <img src={logo} alt="" className="px-2 py-3" />
                <ul onClick={onShow} className="d-flex flex-column mt-4">
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
                    <Link to="/" className="header__top-contact my-3 ms-3">
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
                    <Link to="/" className="header__top-contact d-flex flex-column justify-content-start align-items-start mb-3 ms-3">
                        <span className="header__top-contact-icon">
                            <Clock />
                            <span className="header__top-contact-title ms-2 me-1">
                                Giờ làm việc
                            </span>
                        </span>

                        <span className="header__top-contact-text mt-2">
                            Thứ 2 - Thứ 6 : 8:00 - 17:00
                        </span>
                    </Link>
                </ul>
            </section>
        </>
    );
}

export default NavMobile;