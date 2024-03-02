"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../Button";
import { checkAuthenticated, setCookie } from "@/utils/helper";
import { useState } from "react";
import LogoutIconWhite from "@/public/icons/logout-white.svg";
import LogoutIcon from "@/public/icons/logout.svg";

const Authenticate = ({ isMobile = false }: { isMobile?: boolean }) => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(
    checkAuthenticated("isAuthenticated")
  );

  const handleLogout = () => {
    setCookie("isAuthenticated", false, 1);
    setLoggedIn(false);
    router.refresh();
  };

  return loggedIn ? (
    <Button className="!px-0 !bg-transparent" onClick={handleLogout}>
      <div className="cursor-pointer hover:scale-110 transition-all duration-200">
        <Image
          width={isMobile ? 30 : 24}
          height={isMobile ? 30 : 24}
          src={isMobile ? LogoutIconWhite : LogoutIcon}
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
