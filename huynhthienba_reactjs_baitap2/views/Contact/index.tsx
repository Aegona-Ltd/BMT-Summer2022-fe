import ContactForm from "@/components/ContactForm";
import { Discord, Instagram, Twitter } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactView = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center flex flex-col gap-[10px]">
        <h2 className="font-bold text-3xl">Contact Us</h2>
        <p className="text-grey-500">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <div className="p-[10px] rounded-[10px] bg-light-100 text-light-100 shadow-sm flex flex-col lg:flex-row my-[50px] overflow-hidden">
        <div className="relative">
          <Image
            width={395}
            height={520}
            src="/images/auth/background.png"
            priority
            className="w-full h-[500px] lg:w-auto"
            alt="auth-background"
          />
          <div className="absolute inset-0 p-10 flex flex-col justify-between">
            <div className="flex flex-col gap-px-[6px]">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p>Say something to start a live chat!</p>
            </div>
            <ul className="flex flex-col gap-[50px]">
              <li className="flex items-center gap-6">
                <Image
                  width={18}
                  height={18}
                  src="/icons/phone.svg"
                  alt="phone-icon"
                  priority
                />
                <a href="#">+1012 3456 789</a>
              </li>
              <li className="flex items-center gap-6">
                <Image
                  width={18}
                  height={18}
                  src="/icons/email.svg"
                  alt="email-icon"
                />
                <a href="#">demo@gmail.com</a>
              </li>
              <li className="flex items-start gap-6">
                <Image
                  width={18}
                  height={18}
                  src="/icons/location.svg"
                  alt="location-icon"
                />
                <span>
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </span>
              </li>
            </ul>
            <div className="flex items-center gap-6">
              <Link
                className="w-[30px] h-[30px] flex items-center justify-center bg-dark-300 rounded-full hover:bg-light-100 hover:text-dark-100 duration-500 transition-all"
                href="#"
              >
                <Twitter />
              </Link>
              <Link
                className="w-[30px] h-[30px] flex items-center justify-center bg-dark-300 rounded-full hover:bg-light-100 hover:text-dark-100 duration-500 transition-all"
                href="#"
              >
                <Instagram />
              </Link>
              <Link
                className="w-[30px] h-[30px] flex items-center justify-center bg-dark-300 rounded-full hover:bg-light-100 hover:text-dark-100 duration-500 transition-all"
                href="#"
              >
                <Discord />
              </Link>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactView;
