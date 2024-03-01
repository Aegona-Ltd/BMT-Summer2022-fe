"use client";
import LoginForm from "@/components/LoginForm";
import { selectAuth } from "@/redux/features/auth/reducer";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";

export default function LoginView() {
  const auth = useAppSelector(selectAuth);
  const router = useRouter();

  if (auth.isAuthenticated) {
    setTimeout(() => {
      router.push("/");
      }, 500);
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl text-center font-bold">Sign in</h1>
      <LoginForm />
    </div>
  );
}
