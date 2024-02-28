import React from "react";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="text-center">Auth Content</div>
        {children}
      </div>
    </div>
  );
};
