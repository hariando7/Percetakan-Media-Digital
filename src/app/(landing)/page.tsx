import HomePage from "@/components/landing/HomePage";
import React from "react";
export const metadata = {
  title: "Halaman Utama",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
};

function PageHome() {
  return (
    <>
      <HomePage />
    </>
  );
}

export default PageHome;
