"use client";

import { NAVIGATIONS } from "@/configs/navigations";
import cn from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";

type MenuType = {
  name: string;
  label: string;
  href: string;
  active: string[];
};

const Group = ({ label, menu }: { label: string; menu: MenuType[] }) => {
  return (
    <div className="relative group hover:font-bold after:contents-[''] after:h-5 after:absolute after:right-0 after:-bottom-[80%] after:left-0 cursor-pointer">
      <div className="flex items-center gap-1">
        <a
          className="before:content-[attr(title)] before:block before:font-bold before:h-0 before:invisible before:overflow-hidden inline-block transition-all duration-200 text-center"
          href="#"
          title="Home"
        >
          {label}
        </a>
        <Image width={13} height={9} src="/icons/arrow.svg" alt="arrow-icon" />
      </div>
      <ul className="group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-100 absolute right-0 -bottom-full translate-y-[90%] bg-white p-4 rounded-md shadow-md font-normal">
        {menu.map((z, i) => (
          <li key={i}>
            <a
              className="before:content-[attr(title)] before:block before:font-bold before:h-0 before:invisible before:overflow-hidden inline-block hover:font-bold transition-all duration-200 text-center py-2"
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

const GroupRes = ({ label, menu }: { label: string; menu: MenuType[] }) => {
  const [isActive, setIsActive] = useState(false);
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
            src="/icons/arrow-white.svg"
            alt="arrow-icon"
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
              className="before:content-[attr(title)] before:block before:font-bold before:h-0 before:invisible before:overflow-hidden inline-block hover:font-bold transition-all duration-200 text-center py-2 text-light-100"
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
  const router = useRouter();
  return (
    <nav className="hidden lg:flex items-center gap-10">
      {NAVIGATIONS.map((z, i) =>
        z.group ? (
          <Group key={z.name} label={z.label} menu={z.menu} />
        ) : (
          <Item
            key={z.name}
            label={z.label}
            href={z.href as string}
            isActive={z.active ? z.active?.includes(pathname) : false}
          />
        )
      )}
      <Button theme="light" onClick={() => router.push("/login")} size="small">
        Login
      </Button>
    </nav>
  );
};

export const MenuRes = ({ close }: { close: any }) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex lg:hidden flex-col gap-14 bg-dark-100 text-light-100 h-full p-5">
      <div className="flex justify-between items-center py-1">
        <Link className="text-[24px] font-bold" href="/">
          Next App
        </Link>
        <div className="p-2" onClick={close}>
          <Image
            width={24}
            height={24}
            src="/icons/close.svg"
            alt="close-icon"
          />
        </div>
      </div>
      <nav className="flex flex-col gap-10">
        {NAVIGATIONS.map((z, i) =>
          z.group ? (
            <GroupRes key={z.name} label={z.label} menu={z.menu} />
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
          <Button onClick={() => router.push("/login")} size="small">
            Login
          </Button>
        </div>
      </nav>
    </div>
  );
};
