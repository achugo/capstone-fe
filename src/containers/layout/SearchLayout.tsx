import { useRouter } from "next/router";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function SearchLayout({ children }: Props) {
  const router = useRouter();

  const userMainStyle = "bg-black bg-opacity-50 h-full";
  return (
    <div
      style={{ minHeight: "35em", height: "100vh" }}
      className="bg-[url('/landing-background.jpg')] bg-fixed bg-cover  bg-no-repeat	bg-center h-full"
    >
      <main className={userMainStyle}>{children}</main>
    </div>
  );
}
