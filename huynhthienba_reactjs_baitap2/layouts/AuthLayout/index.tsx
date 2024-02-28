import Image from "next/image";
import React from "react";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center gap-10 p-[40px] md:p-[10px] md:pr-[40px] bg-light-100 shadow-lg rounded-lg">
        <div className="relative hidden md:block">
          <Image
            width={347}
            height={457}
            src="/images/auth/background.png"
            priority
            alt="auth-background"
          />
          <div className="absolute bottom-1/2 left-0 text-light-200 px-5 -translate-y-1/2">
            <h4 className="text-xl font-semibold">Welcome to website</h4>
            <p className="text-lg mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
