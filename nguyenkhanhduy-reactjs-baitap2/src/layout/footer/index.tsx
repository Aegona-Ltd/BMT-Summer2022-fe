import FooterBottom from "./FooterBottom";
import FooterCenter from "./FooterCenter";
import FooterTop from "./FooterTop";

function Footer() {
    return (
        <footer className="footer">
            <FooterTop/>
            <FooterCenter/>
            <FooterBottom/>
        </footer>
    );
}

export default Footer;