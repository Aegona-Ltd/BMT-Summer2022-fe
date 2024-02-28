import { AuthLayout } from "@/layouts/AuthLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Next App",
};

export default function AuthLayoutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthLayout>{children}</AuthLayout>;
}
