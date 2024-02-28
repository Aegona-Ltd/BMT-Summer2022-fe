import type { Metadata } from "next";
import { MainLayout } from "@/layouts/MainLayout";

export const metadata: Metadata = {
  title: "Home | Next App",
};

export default function MainLayoutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayout>{children}</MainLayout>;
}
