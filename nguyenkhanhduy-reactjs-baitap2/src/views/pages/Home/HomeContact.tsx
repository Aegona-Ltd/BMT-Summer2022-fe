import MailIcon from "../../../shared/assets/icon/MailIcon";
import PhoneContactIcon from "../../../shared/assets/icon/PhoneContactIcon";
import PlaceIcon from "../../../shared/assets/icon/PlaceIcon";
import { images } from "../../../shared/assets/images";

function HomeContact() {
    return (
        <section className="homeContact">
            <div className="container homeContact__container">
                <h3 className="homeGeneral__about-title my-5 py-4">
                    Liên Hệ Với AEGONA
                </h3>
                <div className="row row-cols-lg-2 row-cols-1 align-items-center">
                    <div className="col">
                        <div className="d-flex flex-column justify-content-between">
                            <div className="row">
                                <div className="col-auto">
                                    <span className="homeContact__icon">
                                        <PhoneContactIcon />
                                    </span>
                                </div>
                                <div className="col">
                                    <h3 className="homeContact__title mb-1">HotLine</h3>
                                    <p className="homeContact__des">
                                        028 7109 2939
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-auto">
                                    <span className="homeContact__icon">
                                        <MailIcon />
                                    </span>
                                </div>
                                <div className="col">
                                    <h3 className="homeContact__title mb-1">Email</h3>
                                    <p className="homeContact__des">
                                        contact@aegona.com
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-auto">
                                    <span className="homeContact__icon">
                                        <PlaceIcon />
                                    </span>
                                </div>
                                <div className="col">
                                    <h3 className="homeContact__title mb-1">
                                        Địa chỉ
                                    </h3>
                                    <p className="homeContact__des">
                                        Tòa nhà QTSC 9, Khu Phần mềm Quang Trung, P. Tân Chánh Hiệp, Quận 12, TP.HCM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="homeContact__map">
                            <img src={images.map} alt="" className="homeContact__map-img" />

                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${images.earth})` }} className="homeContact__map-background">

            </div>
        </section>
    );
}

export default HomeContact;