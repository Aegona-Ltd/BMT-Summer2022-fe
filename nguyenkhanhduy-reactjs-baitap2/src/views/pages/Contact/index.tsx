import { useFormik } from "formik";
import { AiOutlineMail } from "react-icons/ai";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlinePlace } from "react-icons/md";
import Banner from "../../../shared/components/Banner";
import * as Yup from "yup";
import InputField from "../../../shared/components/InputField";
import usersService from "../../../services/usersService";
import { toast } from "react-toastify";

function Contact() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Tên không được để trống.'),
            subject: Yup.string().required('Tiêu đề không được để trống.'),
            email: Yup.string().required('Email không được để trống.').email('Vui lòng nhập đúng email'),
            message: Yup.string().required('Nội dung không được để trống.')
        }),
        onSubmit: (values) => {
            handleSubmitForm(values)
        }
    })

    const handleSubmitForm = async (values: any) => {
        const user = await usersService.getUserById('1')
        if(user){
            await user.contacts.push(values)
            await usersService.updateUser(user.id, user)
            await toast.success('Gửi thành công')
        }
        
    }

    return (
        <section className="position-relative mt-110">
            <Banner title="Liên hệ" current="Liên hệ" />

            <div className="container">
                <div className="contact__content">
                    <div className="row g-5">
                        <div className="col-lg-6 col-12">
                            <div className="row g-5">
                                <div className="col-12">
                                    <h2 className="contact__title">We Love to Hear From You</h2>
                                    <p className="blogDetail__content-des">Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                </div>

                                <div className="col-md-6 col-12">
                                    <div className="contact__content-address">
                                        <h6 className="fw-bold contact__content-adress-title">London</h6>
                                        <div className="row">
                                            <div className="col-auto">
                                                <span className="contact__content-address-icon"><MdOutlinePlace /></span>
                                            </div>
                                            <div className="col">
                                                <p className="blogDetail__content-des mb-0">
                                                    Fifth Avenue 5501,<br />
                                                    Broadway, New York
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="contact__content-address">
                                        <h6 className="fw-bold contact__content-adress-title">Paris</h6>
                                        <div className="row">
                                            <div className="col-auto">
                                                <span className="contact__content-address-icon"><MdOutlinePlace /></span>
                                            </div>
                                            <div className="col">
                                                <p className="blogDetail__content-des mb-0">
                                                    Fifth Avenue 5501,<br />
                                                    Broadway, New York
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="contact__content-address">
                                        <h6 className="fw-bold contact__content-adress-title">Contact Information</h6>
                                        <div className="row">
                                            <div className="col-auto">
                                                <span className="contact__content-address-icon">
                                                    <AiOutlineMail />
                                                </span>
                                            </div>
                                            <div className="col">
                                                <p className="blogDetail__content-des mb-0">
                                                    organicvegan@example.com<br />
                                                    info@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-12">
                                    <div className="contact__content-address">
                                        <h6 className="fw-bold contact__content-adress-title">Our Business Hours</h6>
                                        <div className="row">
                                            <div className="col-auto">
                                                <span className="contact__content-address-icon">
                                                    <IoCalendarClearOutline />
                                                </span>
                                            </div>
                                            <div className="col">
                                                <p className="blogDetail__content-des mb-0">
                                                    Monday - Friday: 8am - 4pm<br />
                                                    Saturday - Sunday: 9am - 5pm
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
                                formik.handleSubmit()
                            }} className="contact__message">
                                <h2 className="contact__title mb-4">Leave A Message</h2>
                                <InputField
                                    err={formik.touched.name && formik.errors.name}
                                    errMessage={formik.errors.name}
                                    frmField={formik.getFieldProps('name')}
                                    id="name"
                                    labelClass="d-none"
                                    placeholder="Tên"
                                    input={true}
                                />
                                <InputField
                                    err={formik.touched.email && formik.errors.email}
                                    errMessage={formik.errors.email}
                                    frmField={formik.getFieldProps('email')}
                                    id="email"
                                    labelClass="d-none"
                                    placeholder="Email"
                                    input={true}
                                />
                                 <InputField
                                    err={formik.touched.subject && formik.errors.subject}
                                    errMessage={formik.errors.subject}
                                    frmField={formik.getFieldProps('subject')}
                                    id="subject"
                                    labelClass="d-none"
                                    placeholder="Tiêu đề"
                                    input={true}
                                />

                                <InputField
                                    err={formik.touched.message && formik.errors.message}
                                    errMessage={formik.errors.message}
                                    frmField={formik.getFieldProps('message')}
                                    id="message"
                                    labelClass="d-none"
                                    placeholder="Nội dung"
                                    rows = {5}
                                />
                                
                                <div className="contact__message-submit">
                                    <button type = "submit" className="contact__message-submit-btn">
                                        Submit
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