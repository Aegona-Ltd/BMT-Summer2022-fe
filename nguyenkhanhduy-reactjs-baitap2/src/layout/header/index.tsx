import HeaderNav from "./HeaderNav";
import HeaderTop from "./HeaderTop";

function Header() {
    return (
        <header className="header">
            <HeaderTop/>
            <HeaderNav/>
        </header>
    );
}

export default Header;