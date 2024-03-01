"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectAuth } from "@/redux/features/auth/reducer";
import { usePathname } from "next/navigation";
import { clearDataLogin, setLastPathname } from "@/redux/features/auth/action";

const Authenticate = ({ isMobile = false }: { isMobile?: boolean }) => {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(setLastPathname(pathname));
    dispatch(clearDataLogin());
  };

  return isAuthenticated ? (
    <Button className="!px-0 !bg-transparent" onClick={handleLogout}>
      <div className="cursor-pointer hover:scale-110 transition-all duration-200">
        <Image
          width={isMobile ? 30 : 24}
          height={isMobile ? 30 : 24}
          src={isMobile ? "/icons/logout-white.svg" : "/icons/logout.svg"}
          alt="logout-icon"
        />
      </div>
    </Button>
  ) : (
    <Button
      theme={isMobile ? "dark" : "light"}
      onClick={() => router.push("/login")}
      size="small"
    >
      Login
    </Button>
  );
};

export default Authenticate;
