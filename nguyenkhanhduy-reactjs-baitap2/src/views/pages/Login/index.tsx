import * as Yup from 'yup';
import InputField from "../../../shared/components/InputField";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import usersService from "../../../services/usersService";
import { User } from "../../../shared/interfaces/user";
import { login } from "../../../modules/userSlice";
import Banner from "../../../shared/components/Banner";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface LoginFormI {
    email: string,
    password: string,
}

const schema = Yup.object({
    email: Yup.string().required('Email không được để trống.').email('Vui lòng nhập email hợp lệ'),
    password: Yup.string().required('Mật khẩu không được để trống').min(6, 'Độ dài mật khẩu ít nhất 6 kí tự'),
}).required();

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormI>({
        resolver: yupResolver(schema)
    });

    const handleLogin = handleSubmit(async data => {
        const { email, password } = data;

        const users: User[] = await usersService.getUsers();
        if (users) {
            const user = users.find(user => user.email === email && user.password === password);
            if (user) {
                navigate('/');
                dispatch(login({ ...user }));
                toast.success('Đăng nhập thành công');
            }
            else {
                toast.error('Đăng nhập thất bại');
            }
        }
    });


    return (
        <section className="login">
            <Banner
                current="Đăng Nhập"
                title="Đăng Nhập"
            />
            <div className="container my-5">

                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleLogin()
                }} className="login__form">
                    <div className="mb-3">
                        <InputField
                            errMessage={errors.email?.message}
                            register = {register('email')}
                            input = {true}
                            placeholder = "Email"
                            id="email"
                            labelClass="d-none"
                        />

                    </div>
                    <div className="mb-3">
                        <InputField
                            errMessage={errors.password?.message}
                            register = {register('password')}
                            input = {true}
                            placeholder = "Mật khẩu"
                            id="password"
                            labelClass="d-none"
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
                    <div className="row">
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
                            <button className="col login__form-login-btn google">
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
                            <button className="col login__form-login-btn apple">
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