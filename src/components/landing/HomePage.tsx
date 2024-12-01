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
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Tabs } from "@/components/ui/tabs";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  // IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

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

  const titleMedia = [
    {
      text: "Percetakan Media",
      className: "font-bold",
    },
  ];

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/assets/images/percetakan.png",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/assets/images/logo.png",
    },
  ];

  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full h-[350px] relative overflow-hidden rounded-xl p-6 md:p-10 bg-gradient-to-br from-cyan-500 via-teal-600 to-teal-800 shadow-lg border border-cyan-600 transition-transform hover:scale-105 hover:shadow-2xl">
          <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
            Product Tab
          </p>
          <Image
            src="/assets/images/undangan1.jpg"
            alt="dummy image"
            width="500"
            height="500"
            className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
          />
        </div>
      ),
    },
    {
      title: "Services",
      value: "Services",
      content: (
        <div className="w-full h-[350px] relative overflow-hidden rounded-xl p-6 md:p-10 bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700 shadow-lg border border-pink-600 transition-transform hover:scale-105 hover:shadow-2xl">
          <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
            Services Tab
          </p>
          <Image
            src="/assets/images/undangan1.jpg"
            alt="dummy image"
            width="500"
            height="500"
            className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
          />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "Playground",
      content: (
        <div className="w-full h-[350px] relative overflow-hidden rounded-xl p-6 md:p-10 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 shadow-lg border border-orange-500 transition-transform hover:scale-105 hover:shadow-2xl">
          <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
            Playground Tab
          </p>
          <Image
            src="/assets/images/undangan1.jpg"
            alt="dummy image"
            width="500"
            height="500"
            className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
          />
        </div>
      ),
    },
  ];

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life.",
      header: <Skeleton />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
  ];
  const undangan = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: (
        <>
          <Image
            src="/assets/images/undangan1.jpg"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: (
        <>
          <Image
            src="/assets/images/undangan1.jpg"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: (
        <>
          <Image
            src="/assets/images/undangan1.jpg"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: (
        <>
          <Image
            src="/assets/images/undangan1.jpg"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: (
        <>
          <Image
            src="/assets/images/undangan1.jpg"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: (
        <>
          <Image
            src="/assets/images/undangan1.jpg"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: (
        <>
          <Image
            src="/assets/images/undangan1.jpg"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: (
        <>
          <Image
            src="/assets/images/undangan1.jpg"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
  ];

  const tabsCard = [
    {
      title: "Product1",
      value: "product1",
      content: (
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              // description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "Services1",
      value: "Services1",
      content: (
        <BentoGrid className="max-w-4xl mx-auto">
          {undangan.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              // description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 1 || i === 8 ? "md:col-span-1" : "bg-white"}
            />
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "Playground1",
      value: "Playground1",
      content: (
        <div className="w-full h-[350px] relative overflow-hidden rounded-xl p-6 md:p-10 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 shadow-lg border border-orange-500 transition-transform hover:scale-105 hover:shadow-2xl">
          <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
            Playground Tabbbb
          </p>
          <Image
            src="/assets/images/undangan1.jpg"
            alt="dummy image"
            width="500"
            height="500"
            className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="relative w-full bg-black/40">
        {!isMobile ? (
          <>
            <NavbarDekstop className="top-2 md:top-0" />

            <ImagesSlider className="h-screen mt-20" images={images}>
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
                  className="z-50 flex flex-col justify-center items-center"
                >
                  <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                  />
                  <div className="max-w-7xl mx-auto relative z-10 w-full -mt-14">
                    <div className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-white">
                      <div className="font-bold drop-shadow-lg items-center flex justify-center">
                        {/* Percetakan Media */}
                        <TypewriterEffectSmooth words={titleMedia} />
                      </div>
                      Melayani{" "}
                      <FlipWords className="text-white" words={words} />
                    </div>
                    <p className="mt-4 font-normal text-base text-white max-w-full text-center mx-auto">
                      Kami hadir untuk menjadikan setiap momen Anda lebih
                      berkesan dengan kualitas cetak terbaik. Dari undangan
                      pernikahan hingga banner promosi, <br /> semua produk,
                      kami didesain dengan perhatian penuh pada detail,
                      memastikan kepuasan dan hasil maksimal. <br /> Dapatkan
                      solusi cetak yang kreatif, cepat, dan berkualitas hanya di
                      Percetakan Media!
                    </p>
                  </div>
                </motion.div>
              </BackgroundBeamsWithCollision>
            </ImagesSlider>
            {/* <section className="bg-white animate-gradient"> */}
              <section className="bg-gradient-to-b from-white via-white to-[#6eabf0] animate-gradient">
              <div className="h-[900px] w-full p-10 flex justify-between [perspective:1000px] relative flex-col max-w-7xl mx-auto items-start">
                <h1 className="text-primary font-bold text-4xl text-center justify-center m-auto flex mb-5 pt-20">
                  Menerima Pesanan
                </h1>
                <Tabs tabs={tabs} tabsCard={tabsCard} />
              </div>
            </section>

            {/* <HeroParallax products={products} /> */}
            <section className="bg-gradient-to-b from-[#6eabf0] via-white to-white animate-gradient">
              <div className="h-screen w-full p-20">
                <h1 className="text-primary font-bold text-4xl text-center justify-center m-auto flex mb-5 pt-20">
                  Menerima Pesanan
                </h1>
                <AnimatedTestimonials testimonials={testimonials} />
              </div>
            </section>
          </>
        ) : (
          <>
            <div className="relative min-h-screen max-w-full">
              <div className="pb-16">ini konten mobile</div>
              <NavbarMobile className="mt-2" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default HomePage;
