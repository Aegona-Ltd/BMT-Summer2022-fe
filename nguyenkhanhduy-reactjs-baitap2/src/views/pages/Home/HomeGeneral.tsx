import { images } from "../../../shared/assets/images";
import { CgDanger } from "react-icons/cg"
import { FaCheckCircle } from "react-icons/fa";
import WritingIcon from "../../../shared/assets/icon/WritingIcon";
import StudyIcon from "../../../shared/assets/icon/StudyIcon";
import PieChartIcon from "../../../shared/assets/icon/PieChartIcon";

function HomeGeneral() {
    return (
        <article className="homeGeneral position-relative">
            <div
                style={{ backgroundImage: `url(${images.bg2})` }}
                className="homeGeneral__content-bg">

            </div>
            <div className="container">
                <h2 className="homeGeneral__title">
                    Các Vấn Đề Của Người Học<br /> Và Giải Pháp Của AEGONA
                </h2>
                <div className="row g-3">
                    <div className="col d-flex justify-content-start">
                        <div className="homeGeneral__image">
                            <img src={images.pc} alt="" className="homeGeneral__image-pc w-100" />
                            <img src={images.mobile} alt="" className="homeGeneral__image-mobile" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="homeGeneral__content">
                            <h3 className="homeGeneral__content-title">
                                Các vấn đề của người học
                            </h3>
                            <ul className="homeGeneral__list">
                                <li className="homeGeneral__list-item d-flex align-items-center">
                                    <span className="homeGeneral__list-item-icon me-2">
                                        <CgDanger />
                                    </span>
                                    <span className="homeGeneral__list-item-text">
                                        Nhanh quên kiến thức
                                    </span>
                                </li>
                                <li className="homeGeneral__list-item d-flex align-items-center">
                                    <span className="homeGeneral__list-item-icon me-2">
                                        <CgDanger />
                                    </span>
                                    <span className="homeGeneral__list-item-text">
                                        Không áp dụng thực tế bài học
                                    </span>
                                </li>
                                <li className="homeGeneral__list-item d-flex align-items-center">
                                    <span className="homeGeneral__list-item-icon me-2">
                                        <CgDanger />
                                    </span>
                                    <span className="homeGeneral__list-item-text">
                                        Học không cân đối các kỹ năng
                                    </span>
                                </li>
                                <li className="homeGeneral__list-item d-flex align-items-center">
                                    <span className="homeGeneral__list-item-icon me-2">
                                        <CgDanger />
                                    </span>
                                    <span className="homeGeneral__list-item-text">
                                        Nhanh quên kiến thức
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="homeGeneral__content mt-5">

                            <h3 className="homeGeneral__content-title">
                                Giải pháp của AEGONA
                            </h3>
                            <ul className="homeGeneral__list">
                                <li className="homeGeneral__list-item d-flex align-items-center">
                                    <span className="homeGeneral__list-item-icon check me-2">
                                        <FaCheckCircle />
                                    </span>
                                    <span className="homeGeneral__list-item-text">
                                        Mang lại ý nghĩa cho học viên
                                    </span>
                                </li>
                                <li className="homeGeneral__list-item d-flex align-items-center">
                                    <span className="homeGeneral__list-item-icon check me-2">
                                        <FaCheckCircle />
                                    </span>
                                    <span className="homeGeneral__list-item-text">
                                        Giáo trình giảng dạy chất lượng
                                    </span>
                                </li>
                                <li className="homeGeneral__list-item d-flex align-items-center">
                                    <span className="homeGeneral__list-item-icon check me-2">
                                        <FaCheckCircle />
                                    </span>
                                    <span className="homeGeneral__list-item-text">
                                        Không khí cởi mở, vui vẻ
                                    </span>
                                </li>
                                <li className="homeGeneral__list-item d-flex align-items-center">
                                    <span className="homeGeneral__list-item-icon check check-b me-2">
                                        <FaCheckCircle />
                                    </span>
                                    <span className="homeGeneral__list-item-text">
                                        Khuyến khích, đánh giá đều đặn đảm bảo hiệu quả học tập
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="homeGeneral__item">
                    <div className="homeGeneral__circle-1">
                        <img className="w-100" src={images.circles} alt="" />
                    </div>
                    <div className="homeGeneral__circle-2">
                        <img className="w-100" src={images.circles} alt="" />
                    </div>
                    <div className="homeGeneral__row">
                        <div className="row row-cols-1 row-cols-lg-3 g-3">

                            <div className="col homeGeneral__card-wrapper position-relative">
                                <article className="homeGeneral__card">
                                    <span className="homeGeneral__card-icon">
                                        <WritingIcon />
                                    </span>
                                    <h4 className="homeGeneral__card-title my-2">
                                        Học bài
                                    </h4>
                                    <p className="homeGeneral__card-des">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </p>
                                </article>

                            </div>
                            <div className="col">
                                <article className="homeGeneral__card">
                                    <span className="homeGeneral__card-icon">

                                        <StudyIcon />
                                    </span>
                                    <h4 className="homeGeneral__card-title my-2">
                                        Ôn bài
                                    </h4>
                                    <p className="homeGeneral__card-des">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </p>
                                </article>
                            </div>
                            <div className="col">
                                <article className="homeGeneral__card">
                                    <span className="homeGeneral__card-icon">
                                        <PieChartIcon />
                                    </span>
                                    <h4 className="homeGeneral__card-title my-2">
                                        Tiến Độ
                                    </h4>
                                    <p className="homeGeneral__card-des">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </p>

                                </article>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="homeGeneral__about-title my-5 py-4">
                    Hình Ảnh Về AEGONA
                </h3>
                <div className="row g-3 row-cols-1 row-cols-md-2 row-cols-xl-4">
                    <div className="col">
                        <img
                            className="homeGeneral__about-img w-100"
                            src={images.whiteImage}
                            alt=""
                        />
                    </div>
                    <div className="col">
                        <img
                            className="homeGeneral__about-img w-100"
                            src={images.whiteImage}
                            alt=""
                        />
                    </div>
                    <div className="col">
                        <img
                            className="homeGeneral__about-img w-100"
                            src={images.whiteImage}
                            alt=""
                        />
                    </div>
                    <div className="col">
                        <img
                            className="homeGeneral__about-img w-100"
                            src={images.whiteImage}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}

export default HomeGeneral;