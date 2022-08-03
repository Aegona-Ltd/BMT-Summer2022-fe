import { useFormik } from "formik";
import * as Yup from 'yup';
import InputField from "../../../shared/components/InputField";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import usersService from "../../../services/usersService";
import { User } from "../../../shared/interfaces/user";
import { login } from "../../../modules/userSlice";
import Banner from "../../../shared/components/Banner";
import useCompany from "../../../shared/hooks/useCompany";
import {  toast } from 'react-toastify';


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const company = useCompany()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Email không được để trống').email('Vui lòng nhập đúng email'),
            password: Yup.string().required("Mật khẩu không được để trống.").min(6, "Độ dài kí tự mật khẩu phải trên 6 kí tự"),
        }),
        onSubmit: (values) => {
            handleLogin(values)
        }
    })

    const handleLogin = async (values: any) => {
        const { email, password } = values

        const users: User[] = await usersService.getUsers()
        if (users) {
            const user = users.find(user => user.email === email && user.password === password)
            if (user) {
                navigate('/')
                dispatch(login({ ...user }))
                toast.success('Đăng nhập thành công')
            }
            else{
                toast.error('Đăng nhập thất bại')
            }
        }

    }

    return (
        <section className="login">
            <Banner
                current="Đăng Nhập"
                title="Đăng Nhập"
            />
            <div className="container mt-5">

                <form onSubmit={(e) => {
                    e.preventDefault()
                    formik.handleSubmit()
                }} className="login__form">
                    <div className="mb-3">
                        <InputField
                            err={formik.touched.email && formik.errors.email}
                            errMessage={formik.errors.email}
                            frmField={formik.getFieldProps('email')}
                            id="email"
                            labelClass="d-none"
                            placeholder="Email"
                            input={true}
                        />
                    </div>
                    <div className="mb-3">
                        <InputField
                            err={formik.touched.password && formik.errors.password}
                            errMessage={formik.errors.password}
                            frmField={formik.getFieldProps('password')}
                            id="password"
                            labelClass="d-none"
                            placeholder="Mật khẩu"
                            input={true}
                        />
                    </div>
                    <div className="login__form-btn d-flex justify-content-between align-items-center">
                        <div>
                            <input type="checkbox" />
                            <label className="ms-2">Nhớ mật khẩu</label>
                        </div>
                        <button type="submit">Đăng Nhập</button>
                    </div>
                    <p className="my-3 login__form-separate">Hoặc đăng nhập với</p>
                    <div className="row g-3">
                        <div className="col">
                            <button className="login__form-login-btn facebook mb-4">
                                <img
                                    className="login__form-login-btn-icon"
                                    src="https://s1.vnecdn.net/myvne/i/v64/ls/icons/facebook_ico.svg"
                                    alt="Facebook"
                                />
                                <span className="login__form-login-btn-text d-md-block d-none">
                                    Facebook
                                </span>

                            </button>
                        </div>
                        <div className="col">
                            <button className="col login__form-login-btn mx-md-0 mx-3 google mb-4">
                                <img
                                    className="login__form-login-btn-icon"
                                    src="https://s1.vnecdn.net/myvne/i/v64/ls/icons/google_ico.svg"
                                    alt="Facebook"
                                />
                                <span className="login__form-login-btn-text d-md-block d-none">
                                    Google
                                </span>

                            </button>
                        </div>
                        <div className="col">
                            <button className="col login__form-login-btn  apple">
                                <img
                                    className="login__form-login-btn-icon"
                                    src="https://s1.vnecdn.net/myvne/i/v64/ls/icons/app_ico.svg"
                                    alt="Facebook"
                                />
                                <span className="login__form-login-btn-text d-md-block d-none">
                                    Apple
                                </span>

                            </button>
                        </div>



                    </div>
                </form>
            </div>

        </section>
    );
}

export default Login;