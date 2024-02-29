"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import Image from "next/image";
import Button from "../Button";
import Input from "../Input";
import { contactSchema } from "@/utils/validations";
import { FormContact } from "@/utils/type";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: FormContact) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitting) {
      if (errors.firstName) {
        toast(errors.firstName.message, {
          type: "error",
        });
      } else if (errors.email) {
        toast(errors.email.message, {
          type: "error",
        });
      } else if (errors.phoneNumber) {
        toast(errors.phoneNumber.message, {
          type: "error",
        });
      } else if (errors.message) {
        toast(errors.message.message, {
          type: "error",
        });
      }
    }
    if (isSubmitSuccessful) {
      toast("Success!!!", {
        type: "success",
      });
    }
  }, [isSubmitting, isSubmitSuccessful]);

  return (
    <form
      method="post"
      className="p-[50px] flex-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col lg:grid grid-cols-2 gap-10">
        <Input
          label="First Name"
          type="text"
          name="firstName"
          placeholder=" "
          required
          error={!!errors.firstName}
          register={register}
        />
        <Input
          label="Last Name"
          type="text"
          name="lastName"
          placeholder=" "
          register={register}
        />
        <Input
          label="Email"
          type="text"
          name="email"
          placeholder=" "
          required
          error={!!errors.email}
          register={register}
        />
        <Input
          label="Phone Number"
          type="text"
          name="phoneNumber"
          placeholder=" "
          required
          error={!!errors.phoneNumber}
          register={register}
        />

        <div className="col-span-2 w-full">
          <Input
            label="Message"
            type="text"
            name="message"
            placeholder=" "
            required
            error={!!errors.message}
            register={register}
          />
        </div>
      </div>
      <div className="relative flex justify-end mb-0 sm:mb-10 lg:mt-10">
        <Button
          theme="light"
          className="w-full lg:w-auto relative z-[1]"
          type="submit"
          size="medium"
        >
          Send Message
        </Button>
        <div className="absolute -z-0 top-[33%] hidden sm:block sm:-left-[50%] md:-left-[25%] lg:-left-[20%] xl:left-[20%] 2xl:left-[42%] translate-x-full">
          <Image
            width={240}
            height={112}
            src="/images/auth/letter-send.png"
            priority
            alt="letter-send"
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
