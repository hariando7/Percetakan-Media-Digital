"use client";
import React from "react";
// import { HeroParallax } from "@/components/ui/hero-parallax";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { Spotlight } from "@/components/ui/Spotlight";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import NavbarMobile from "./NavbarMobile";
import NavbarDekstop from "./NavbarDekstop";
import Image from "next/image";

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
  const isMobile = useMediaQuery("(max-width: 768px)");
  const images = [
    "/assets/images/undangan1.jpg",
    "/assets/images/undangan2.jpg",
    "/assets/images/undangan3.jpg",
    "/assets/images/kalender1.jpg",
    "/assets/images/tabloid1.png",
    "/assets/images/yasin1.jpg",
  ];
  // const title = ["Percetakan","Bandar Lampung"];
  const words = [
    "Undangan Web",
    "Undangan Pernikahan",
    "Kalender Tahunan",
    "Tabloid / Majalah",
    "Banner",
    "Aqiqah & Tasmiyah",
    "Buku Yasin",
    "Dan Masih Banyak Lagi",
  ];

  return (
    <>
      <div className="relative w-full bg-black/40">
        {!isMobile ? (
          <>
            <NavbarDekstop className="top-2 md:top-0" />

            <ImagesSlider className="h-screen" images={images}>
              <BackgroundBeamsWithCollision>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -80,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="z-50 flex flex-col justify-center items-center mt-10"
                >
                  <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                  />
                  <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-10">
                    <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-white">
                      <span className="text-primary font-bold drop-shadow-lg">Percetakan Media</span>
                      <br />
                      Melayani{" "}
                      <FlipWords className="text-white" words={words} />
                    </h1>
                    <p className="mt-4 font-normal text-base text-white max-w-full text-center mx-auto">
                      Kami hadir untuk menjadikan setiap momen Anda lebih
                      berkesan dengan kualitas cetak terbaik. Dari undangan
                      pernikahan hingga banner promosi, <br /> semua produk, kami
                      didesain dengan perhatian penuh pada detail, memastikan
                      kepuasan dan hasil maksimal. <br /> Dapatkan solusi cetak
                      yang kreatif, cepat, dan berkualitas hanya di Percetakan
                      Media!
                    </p>
                  </div>
                </motion.div>
              </BackgroundBeamsWithCollision>
            </ImagesSlider>

            {/* <HeroParallax products={products} /> */}
            <section className="bg-white">
              <div className="h-screen w-full p-20 flex justify-between">
                <div className="bg-blue-300 w-full">
                  <Image
                    src="/assets/images/logo.png"
                    width={100}
                    height={50}
                    alt="Media Percetakan"
                    className=""
                  />
                </div>
                <div className="bg-red-300 w-full">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Provident suscipit, asperiores dolores placeat voluptatem
                  maiores, cum nemo vero nisi libero ab quibusdam, doloremque
                  odit non ullam dignissimos sit? Illum quia inventore nostrum
                  ratione itaque officia rem, laborum illo eveniet nihil,
                  perspiciatis incidunt eligendi sed voluptates totam ab rerum
                  veniam. Quaerat eligendi vitae praesentium fugiat possimus
                  excepturi qui accusamus mollitia quae atque ea a ipsam nostrum
                  quis assumenda debitis iste necessitatibus dolor saepe
                  dignissimos, obcaecati accusantium ratione! Eum aliquid unde
                  deleniti tempore, deserunt ducimus saepe nobis consequatur,
                  pariatur optio alias. Architecto non quia nesciunt ut hic
                  consectetur veritatis earum perferendis deserunt.
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <div className="relative min-h-screen max-w-full">
              <div className="pb-16">ini konten mobile</div>
              <NavbarMobile className="" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default HomePage;
