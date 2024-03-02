"use client";

import { NAVIGATIONS } from "@/configs/navigations";
import cn from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GroupMenuType } from "@/utils/type";
import Authenticate from "../Authenticate";
import ArrowIcon from "@/public/icons/arrow.svg";
import ArrowWhiteIcon from "@/public/icons/arrow-white.svg";
import CloseIcon from "@/public/icons/close.svg";

const Group = ({ label, menu, isActive }: GroupMenuType) => {
  const pathname = usePathname();

  return (
    <div className="relative group hover:font-bold after:contents-[''] after:h-5 after:absolute after:right-0 after:-bottom-[80%] after:left-0 cursor-pointer">
      <div className="flex items-center gap-1">
        <a
          className={cn(
            "before:content-[attr(title)] before:block before:font-bold before:h-0 before:invisible before:overflow-hidden inline-block transition-all duration-200 text-center",
            {
              "font-bold": isActive,
            }
          )}
          href="#"
          title="Home"
        >
          {label}
        </a>
        <Image
          width={13}
          height={9}
          className="w-full h-auto"
          src={ArrowIcon}
          alt="arrow-icon"
        />
      </div>
      <ul className="group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-100 absolute right-0 -bottom-full translate-y-[90%] bg-white p-4 rounded-md shadow-md font-normal">
        {menu.map((z, i) => (
          <li key={i}>
            <a
              className={cn(
                "before:content-[attr(title)] before:block before:font-bold before:h-0 before:invisible before:overflow-hidden inline-block hover:font-bold transition-all duration-200 text-center py-2",
                {
                  "font-bold": z.active ? z.active?.includes(pathname) : false,
                }
              )}
              href={z.href}
              title={z.label}
            >
              {z.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const GroupRes = ({ label, menu }: GroupMenuType) => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  return (
    <div
      className="hover:font-bold after:contents-[''] after:h-5 after:absolute after:right-0 after:-bottom-[80%] after:left-0"
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex items-center gap-1">
        <a
          className="before:content-[attr(title)] before:block before:font-bold before:h-0 before:invisible before:overflow-hidden inline-block transition-all duration-200 text-center"
          href="#"
          title="Home"
        >
          {label}
        </a>
        <div
          className={cn("transition-all duration-200", {
            "rotate-0": !isActive,
            "rotate-180": isActive,
          })}
        >
          <Image
            width={13}
            height={9}
            src={ArrowWhiteIcon}
            alt="arrow-icon"
            className="w-full h-full"
          />
        </div>
      </div>
      <ul
        className={cn("hidden p-4 rounded-md shadow-md font-normal", {
          block: isActive,
        })}
      >
        {menu.map((z, i) => (
          <li key={i}>
            <a
              className={cn(
                "before:content-[attr(title)] before:block before:font-bold before:h-0 before:invisible before:overflow-hidden inline-block hover:font-bold transition-all duration-200 text-center py-2 text-light-100",
                {
                  "font-bold": z.active ? z.active?.includes(pathname) : false,
                }
              )}
              href={z.href}
              title={z.label}
            >
              {z.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Item = ({
  label,
  href,
  isActive,
}: {
  label: string;
  href: string;
  isActive: boolean;
}) => {
  return (
    <div>
      <Link
        className={cn(
          "before:content-[attr(title)] before:block before:font-bold before:h-0 before:invisible before:overflow-hidden inline-block hover:font-bold transition-all duration-200 text-center",
          {
            "font-bold": isActive,
          }
        )}
        href={href}
        title={label}
      >
        {label}
      </Link>
    </div>
  );
};

export const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-10">
      {NAVIGATIONS.map((z, i) =>
        z.group ? (
          <Group
            isActive={z.active ? z.active?.includes(pathname) : false}
            key={z.name}
            label={z.label}
            menu={z.menu}
          />
        ) : (
          <Item
            key={z.name}
            label={z.label}
            href={z.href as string}
            isActive={z.active ? z.active?.includes(pathname) : false}
          />
        )
      )}
      <Authenticate />
    </nav>
  );
};

export const MenuRes = ({ close }: { close: any }) => {
  const pathname = usePathname();

  return (
    <div className="flex lg:hidden flex-col gap-14 bg-dark-100 text-light-100 h-full p-5">
      <div className="flex justify-between items-center py-1">
        <Link className="text-[24px] font-bold" href="/">
          Next App
        </Link>
        <div className="p-2" onClick={close}>
          <Image width={24} height={24} src={CloseIcon} alt="close-icon" />
        </div>
      </div>
      <nav className="flex flex-col gap-10">
        {NAVIGATIONS.map((z, i) =>
          z.group ? (
            <GroupRes
              isActive={z.active ? z.active?.includes(pathname) : false}
              key={z.name}
              label={z.label}
              menu={z.menu}
            />
          ) : (
            <Item
              key={z.name}
              label={z.label}
              href={z.href as string}
              isActive={z.active ? z.active?.includes(pathname) : false}
            />
          )
        )}
        <div>
          <Authenticate isMobile />
        </div>
      </nav>
    </div>
  );
};
