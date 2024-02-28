import React from "react";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="text-center">Auth Content</div>
      {children}
    </>
  );
};
