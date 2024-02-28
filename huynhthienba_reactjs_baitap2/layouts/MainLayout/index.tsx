import { Footer } from "@/components/Footer/Index";
import { Header } from "@/components/Header";
import React from "react";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
