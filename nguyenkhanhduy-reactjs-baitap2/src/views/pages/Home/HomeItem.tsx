import PieChartIcon from "../../../shared/assets/icon/PieChartIcon";
import StudyIcon from "../../../shared/assets/icon/StudyIcon";
import WritingIcon from "../../../shared/assets/icon/WritingIcon";
import { images } from "../../../shared/assets/images";

function HomeItem() {
    return (
        <div className="homeGeneral__item">
            <div className="homeGeneral__circle-1">
                <img className="w-100" src={images.circles} alt="" />
            </div>
            <div className="homeGeneral__circle-2">
                <img className="w-100" src={images.circles} alt="" />
            </div>
            <div className="row">

                <div className="col-12 homeGeneral__card-wrapper position-relative">
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
    );
}

export default HomeItem;