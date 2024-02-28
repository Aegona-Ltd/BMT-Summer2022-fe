import React from "react";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "../Menu";

export const Header = () => {
  return (
    <header className="bg-light-200">
      <div className="flex items-center justify-between py-6 container mx-auto">
        <Link className="text-[24px] font-bold" href="/">
          Next App
        </Link>
        <Menu />
      </div>
    </header>
  );
};
