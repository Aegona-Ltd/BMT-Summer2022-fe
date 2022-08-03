import { AiOutlineMail } from "react-icons/ai";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlinePlace } from "react-icons/md";
import Banner from "../../../shared/components/Banner";
import * as Yup from "yup";
import InputField from "../../../shared/components/InputField";
import usersService from "../../../services/usersService";
import { toast } from "react-toastify";
import { FaTelegramPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { BsTelephone } from "react-icons/bs";

interface ContactFormI {
    name: string,
    email: string,
    subject: string,
    message: string,
};

const schema = Yup.object({
    name: Yup.string().required('Tên không được để trống.'),
    subject: Yup.string().required('Tiêu đề không được để trống.'),
    email: Yup.string().required('Email không được để trống.').email('Vui lòng nhập đúng email'),
    message: Yup.string().required('Nội dung không được để trống.')
}).required();

function Contact() {

    const { register, handleSubmit, reset,formState: { errors } } = useForm<ContactFormI>({
        resolver: yupResolver(schema)
    });

    const handleSubmitForm = handleSubmit(async data => {
        const user = await usersService.getUserById('1');
        if (user) {
            await user.contacts.push(data);
            await usersService.updateUser(user.id, user);
            await toast.success('Gửi thành công');
            reset()
        }
    })

    return (
        <section className="position-relative mt-110">
            <Banner title="Liên hệ" current="Liên hệ" />

            <div className="container">
                <div className="contact__content">
                    <div className="row g-5">
                        <div className="col-lg-6 col-12">
                            <div className="row g-5">
                                <div className="col-12">
                                    <h2 className="contact__title">
                                        Thông tin liên hệ
                                    </h2>
                                    <p className="blogDetail__content-des">
                                        Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                    </p>
                                </div>

                                <div className="col-md-6 col-12">
                                    <div className="contact__content-address">
                                        <h6 className="fw-bold contact__content-adress-title">
                                            Hồ Chí Minh
                                        </h6>
                                        <div className="row">
                                            <div className="col-auto">
                                                <span className="contact__content-address-icon">
                                                    <MdOutlinePlace />
                                                </span>
                                            </div>
                                            <div className="col">
                                                <p className="blogDetail__content-des mb-0">
                                                    Tòa nhà QTSC 9, Khu Phần mềm Quang Trung, P. Tân Chánh Hiệp, Quận 12, TP.HCM
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="contact__content-address">
                                        <h6 className="fw-bold contact__content-adress-title">
                                            Hotline
                                        </h6>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <span className="contact__content-address-icon">
                                                    <BsTelephone />
                                                </span>
                                            </div>
                                            <div className="col">
                                                <p className="blogDetail__content-des mb-0">
                                                    1900 2021

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-12">
                                    <div className="contact__content-address">
                                        <h6 className="fw-bold contact__content-adress-title">
                                            Liên hệ
                                        </h6>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <span className="contact__content-address-icon">
                                                    <AiOutlineMail />
                                                </span>
                                            </div>
                                            <div className="col">
                                                <p className="blogDetail__content-des mb-0">
                                                    contact@aegona.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-12">
                                    <div className="contact__content-address">
                                        <h6 className="fw-bold contact__content-adress-title">
                                            Giờ làm việc
                                        </h6>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <span className="contact__content-address-icon">
                                                    <IoCalendarClearOutline />
                                                </span>
                                            </div>
                                            <div className="col">
                                                <p className="blogDetail__content-des mb-0">
                                                    Thứ 2 - Thứ 6: 8am - 17pm
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                handleSubmitForm()
                            }} className="contact__message">
                                <h2 className="contact__title mb-4">Gửi ý kiến</h2>
                                <InputField
                                    register={register('name')}
                                    errMessage={errors.name?.message}
                                  
                                    id="name"
                                    labelClass="d-none"
                                    placeholder="Tên"
                                    input={true}
                                />
                                <InputField
                                    errMessage={errors.email?.message}
                                    register={register('email')}
                                    id="email"
                                    labelClass="d-none"
                                    placeholder="Email"
                                    input={true}
                                />
                                <InputField
                                    errMessage={errors.subject?.message}
                                    register={register('subject')}
                                    id="subject"
                                    labelClass="d-none"
                                    placeholder="Tiêu đề"
                                    input={true}
                                />

                                <InputField
                                    
                                    errMessage={errors.message?.message}
                                    register={register('message')}
                                    id="message"
                                    labelClass="d-none"
                                    placeholder="Nội dung"
                                    rows={5}
                                />

                                <div className="contact__message-submit">
                                    <button type="submit" className="contact__message-submit-btn">
                                        <span className="me-2">
                                            <FaTelegramPlane />
                                        </span>
                                        Gửi Đi

                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;