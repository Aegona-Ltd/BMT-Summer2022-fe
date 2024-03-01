"use client";

import { selectAuth } from "@/redux/features/auth/reducer";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const auth = useAppSelector(selectAuth);
  const router = useRouter();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      router.push("/login");
    }
  }, [auth.isAuthenticated, router]);

  return auth.isAuthenticated ? <>{children}</> : null;
};

export default PrivateRoute;
