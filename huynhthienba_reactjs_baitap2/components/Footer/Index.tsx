import Image from "next/image";
import React from "react";
import Button from "../Button";
import PhoneIcon from "@/public/icons/phone.svg";
import EmailIcon from "@/public/icons/email.svg";
import LocationIcon from "@/public/icons/location.svg";

export const Footer = () => {
  return (
    <footer className="bg-dark-100 text-light-100">
      <div className="container mx-auto pt-20 pb-16 px-4 lg:px-0 flex flex-col gap-11">
        <h3 className="text-center font-bold text-2xl">Next App</h3>
        <div className="flex justify-between flex-col xl:flex-row gap-12 pt-[30px] border-t border-light-100">
          <div className="flex flex-col gap-5  flex-1">
            <h4 className="font-semibold text-lg">Reach us</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-6">
                <Image
                  width={24}
                  height={24}
                  src={PhoneIcon}
                  alt="phone-icon"
                  priority
                />
                <a href="#">+1012 3456 789</a>
              </li>
              <li className="flex items-center gap-6">
                <Image
                  width={24}
                  height={24}
                  src={EmailIcon}
                  alt="email-icon"
                />
                <a href="#">demo@gmail.com</a>
              </li>
              <li className="flex items-start gap-6">
                <Image
                  width={24}
                  height={24}
                  src={LocationIcon}
                  alt="location-icon"
                />
                <span>
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </span>
              </li>
            </ul>
          </div>
          <div className="flex justify-between flex-wrap gap-5 lg:gap-[60px]">
            <div className="flex flex-col gap-5">
              <h4 className="font-semibold text-lg">Company</h4>
              <ul className="flex flex-col gap-6">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Apps</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="font-semibold text-lg">Legal</h4>
              <ul className="flex flex-col gap-6">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Services</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <ul className="flex flex-col gap-6">
                <li>
                  <a href="#">Techlabz Keybox</a>
                </li>
                <li>
                  <a href="#">Downloads</a>
                </li>
                <li>
                  <a href="#">Forum</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="xl:ml-12 flex-1 flex flex-col gap-5 bg-dark-400 rounded-[10px] p-[14px]">
            <h4 className="font-semibold text-lg">Join Our Newsletter</h4>
            <div className="flex items-center">
              <input
                className="h-10 w-full p-[10px] rounded-l-lg bg-dark-600 outline-none text-[11px] placeholder:text-grey-400 text-light-200"
                type="text"
                placeholder="Your email address"
              />
              <Button
                className="rounded-l-none !py-[10px] !px-[22px] max-w-[105px] text-[12px] hover:!bg-dark-100"
                theme="light"
                size="medium"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-[13px] font-medium text-grey-500">
              * Will send you weekly updates for your better tool management.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
