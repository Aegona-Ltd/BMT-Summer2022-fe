import PlayIcon from "../../../shared/assets/icon/PlayIcon";
import { images } from "../../../shared/assets/images";

function HomeBanner() {
    return (
        <article className="homeBanner">
            <div className="container">
                <div className="row g-3 row-cols-lg-2 row-cols-1 align-items-center">
                    <div className="col homeBanner__col">
                        <div className="homeBanner__title">
                            <h2>Giới thiệu chung</h2>
                            <h2 className="mb-0">Website học Tiếng Anh</h2>
                        </div>
                        <p className="homeBanner__des my-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                        <div className="d-flex">
                            <button className="homeBanner__btn me-2">
                                Đăng ký học ngay
                            </button>
                            <button className="homeBanner__btn homeBanner__btn-free ms-2">
                                Dùng thử miễn phí
                            </button>
                        </div>
                        <div className="homeBanner__circle d-lg-block d-none">
                            <img src = {images.circles} alt = ""/>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <div className="homeBanner__image ">
                            <img src={images.banner1} alt="" className="d-block homeBanner__image-1 w-100"/>
                            <button className="homeBanner__image-btn">
                                <PlayIcon/>
                            </button>
                            <img src = {images.banner2} alt = "" className="homeBanner__image-2"/>
                            <img className="homeBanner__image-3" src = {images.banner3} alt = ""/>
                            <img className="homeBanner__image-4" src = {images.banner4} alt = ""/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </article>
    );
}

export default HomeBanner;