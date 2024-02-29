"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, MenuRes } from "../Menu";
import Image from "next/image";
import cn from "@/utils/cn";

export const Header = () => {
  const [isShowMewnu, setIsShowMewnu] = useState(false);
  return (
    <header className="bg-light-200">
      <div className="flex items-center justify-between py-6 container mx-auto px-4 lg:px-0">
        <Link className="text-[24px] font-bold" href="/">
          Next App
        </Link>
        <div
          className="block lg:hidden p-2"
          onClick={() => setIsShowMewnu(true)}
        >
          <Image
            width={24}
            height={24}
            src="/icons/menu.svg"
            alt="close-icon"
          />
        </div>
        <Menu />
        <div
          className={cn(`fixed z-50 inset-0 transition-all duration-200`, {
            "translate-y-0 visible": isShowMewnu,
            "-translate-y-full invisible": !isShowMewnu,
          })}
        >
          <MenuRes close={() => setIsShowMewnu(false)} />
        </div>
      </div>
    </header>
  );
};
