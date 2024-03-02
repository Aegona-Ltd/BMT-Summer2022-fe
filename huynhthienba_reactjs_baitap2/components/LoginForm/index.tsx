"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../Button";
import Input from "../Input";
import { toast } from "react-toastify";
import { loginSchema } from "@/utils/validations";
import { FormLogin } from "@/utils/type";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectUser } from "@/redux/features/user/reducer";
import { getUsersList } from "@/redux/features/user/action";
import { setLoginSuccess } from "@/redux/features/auth/action";
import { useRouter } from "next/navigation";
import { selectAuth } from "@/redux/features/auth/reducer";

const LoginForm = () => {
  const user = useAppSelector(selectUser);
  const { lastPathname } = useAppSelector(selectAuth);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: FormLogin) => {
    const userLogin = user.users.filter(
      (user) => user.email === data.email && user.password === data.password
    );

    if (userLogin.length > 0) {
      dispatch(setLoginSuccess(userLogin[0]));
      toast("Login successful", { type: "success" });
      router.push(lastPathname || "/");
    } else {
      toast("Username or password incorrect", { type: "error" });
    }
  };

  useEffect(() => {
    if (isSubmitting) {
      if (errors.email) {
        toast(errors.email.message, {
          type: "error",
        });
      } else if (errors.password) {
        toast(errors.password.message, {
          type: "error",
        });
      }
    }
  }, [isSubmitting, isSubmitSuccessful]);

  useEffect(() => {
    dispatch(getUsersList());
  }, []);

  return (
    <form method="post" className="min-w-72" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email address"
        type="text"
        name="email"
        placeholder=" "
        error={!!errors.email}
        register={register}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder=" "
        error={!!errors.password}
        register={register}
      />
      <div className="flex flex-col gap-3">
        <div className="flex justify-end">
          <Button
            theme="light"
            className="w-full lg:w-auto"
            type="submit"
            size="small"
            loading={user.loading}
          >
            Sign in
          </Button>
        </div>
        <div className="text-sm text-grey-100">
          Don’t have an account yet?{" "}
          <a href="#" className="hover:underline font-medium">
            Sign up
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
