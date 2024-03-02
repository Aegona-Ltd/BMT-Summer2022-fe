import cn from "@/utils/cn";
import Image from "next/image";
import React, { ReactNode, useEffect } from "react";
import CloseIcon from "@/public/icons/close.svg";

const Popup = ({
  open,
  setClose,
  className,
  children,
  title,
}: {
  open: boolean;
  setClose: any;
  className?: string;
  children: ReactNode;
  title: string;
}) => {
  useEffect(() => {
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <div
      className={cn(
        "flex justify-center items-center fixed inset-0 bg-grey-300/50 duration-300 transition-all translate-y-full",
        {
          "translate-y-0": open,
        }
      )}
      onClick={(e) => {
        setClose();
      }}
    >
      <div
        className={cn(
          "rounded-[30px] min-h-[150px] bg-dark-600 transition-all duration-500 text-white p-6",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-lg">{title}</h4>
          <button onClick={setClose} type="button">
            <Image width={24} height={24} src={CloseIcon} alt="close-icon" />
          </button>
        </div>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
