import { useRouter } from "next/router";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  const router = useRouter();

  const stylesLanding: any = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    maxHeight: "40vh",
    backgroundImage: `url('./landing-background.jpg')`,
    backgroundSize: "cover",
  };

  const stylesRegister: any = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    backgroundImage: `url('./registration.jpg')`,
    backgroundSize: "cover",
  };

  const isLoginOrRegister =
    router.pathname.includes("login") || router.pathname.includes("register");
  const loginRegisterMainStyle = "flex min-h-screen flex-col items-center justify-start md:px-24 bg-black bg-opacity-50 h-screen";
  const userMainStyle = "min-h-screen bg-black bg-opacity-50 h-screen";
  return (
    <div
      className={`${
        isLoginOrRegister
          ? "bg-[url('/registration.jpg')]"
          : "bg-[url('/landing-background.jpg')]"
      } bg-fixed bg-cover bg-black	 bg-no-repeat	 bg-center min-h-full h-screen	`}
      // className="bg-black"
    >
      <main
        className={isLoginOrRegister ? loginRegisterMainStyle : userMainStyle}
      >
        {children}
      </main>
    </div>
  );
}
