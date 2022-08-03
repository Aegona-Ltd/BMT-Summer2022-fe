import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io"
import { images } from "../../assets/images"

interface BannerProps {
    title: string,
    current: string,
}

function Banner(props: BannerProps) {
    const { title, current } = props

    return (
        <article className="position-relative">
            <div style={{ backgroundImage: `url(${images.bannerShop})`, minHeight: "260px", width: "100%" }}></div>
            <div className="position-absolute w-100 justify-content-center top-50 start-50 translate-middle d-flex flex-column align-items-center">
                <h1 className="text-heading fw-bold">{title}</h1>
                <div className="d-flex align-items-center">
                    <Link to="/" className="banner__link">
                        <small>Trang chủ</small>
                    </Link>
                    <p className="mb-0">
                        <small className="mx-2 color-bc"><IoIosArrowForward /></small>
                        <small className="text-capitalize">{current}</small>
                    </p>
                </div>
            </div>
        </article>
    );
}

export default Banner;