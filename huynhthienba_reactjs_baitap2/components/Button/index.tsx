"use client";
import React from "react";
import Spinner from "@/public/icons/spinner.svg";

import cn from "@/utils/cn";
import Image from "next/image";
import { ButtonProps } from "@/utils/interface";

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  fullWidth,
  loading,
  onClick,
  type = "button",
  size = "medium",
  theme = "dark",
}) => {
  return (
    <button
      type={type}
      className={cn(
        `rounded-lg text-lg flex justify-center relative transition-all hover:opacity-90`,
        className,
        {
          "bg-dark-100 hover:bg-dark-600 text-light-100": theme === "light",
          "bg-light-100 hover:bg-light-200 text-dark-100": theme === "dark",
          "cursor-not-allowed": !!disabled,
          "cursor-progress": !!loading,
          "px-12 py-4": size === "medium",
          "px-8 py-2": size === "small",
          "w-full": fullWidth,
        }
      )}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            className="animate-spin"
            width={20}
            height={20}
            src={Spinner}
            alt="spinner"
          />
        </div>
      ) : null}{" "}
      <div
        className={cn({
          invisible: loading,
        })}
      >
        {children}
      </div>
    </button>
  );
};

export default Button;
