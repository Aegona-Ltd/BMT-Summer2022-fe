"use client";
import React, { MouseEventHandler } from "react";
import Spinner from "@/public/icons/spinner.svg";

import cn from "@/utils/cn";
import Image from "next/image";

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  fullWidth,
  loading,
  onClick,
  type = "button",
  size = "medium",
}) => {
  return (
    <button
      type={type}
      className={cn(
        `rounded-lg text-lg flex justify-center relative transition-all bg-dark-100 hover:opacity-90 hover:bg-dark-600 text-light-100`,
        className,
        {
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
