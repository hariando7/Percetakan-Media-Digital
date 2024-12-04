"use client";
import React from "react";
// import { HeroParallax } from "@/components/ui/hero-parallax";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
// import { Spotlight } from "@/components/ui/Spotlight";
// import NavbarMobile from "./NavbarMobile";
import HeroDekstop from "../component/Hero";
import ServicesComponents from "../component/Services";
import AdvertisementComponents from "../component/Advertisement";
import ClientComponents from "../component/Client";
import FooterComponents from "../component/Footer";
import NavbarComponents from "../component/Navbar";

// export const products = [
//   {
//     title: "Undangan 1",
//     link: "",
//     thumbnail: "/assets/images/undangan1.jpg",
//   },
//   {
//     title: "Undangan 2",
//     link: "",
//     thumbnail: "/assets/images/undangan2.jpg",
//   },
//   {
//     title: "Undangan 3",
//     link: "",
//     thumbnail: "/assets/images/undangan3.jpg",
//   },
//   {
//     title: "Kalender 1",
//     link: "",
//     thumbnail: "/assets/images/kalender1.jpg",
//   },
//   {
//     title: "Tabloid 1",
//     link: "",
//     thumbnail: "/assets/images/tabloid1.png",
//   },
//   {
//     title: "Yasin 1",
//     link: "",
//     thumbnail: "/assets/images/yasin1.jpg",
//   },
// ];

function HomePage() {
  // const title = ["Percetakan","Bandar Lampung"];
  return (
    <div className="relative w-full bg-black/40">
      {/* Nababr buka */}
      <NavbarComponents className="top-2 md:top-0" />
      {/* Navbar Tutup */}

      {/* Hero Buka */}
      <HeroDekstop />
      {/* Hero Tutup */}

      {/* Services Buka */}
      <ServicesComponents />
      {/* Services Tutup */}

      {/* Advertisement Buka*/}
      <AdvertisementComponents />
      {/* Advertisement Tutup*/}

      {/* Client Buka */}
      <ClientComponents />
      {/* Client Tutup */}

      {/* Footer Buka */}
      <FooterComponents />
      {/* Footer Tutup */}
    </div>
  );
}

export default HomePage;
