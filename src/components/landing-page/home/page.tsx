"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import ComponentsNavMobile from "../nav-mobile/home";
import { Spotlight } from "@/components/ui/Spotlight";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-full mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Beranda">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">Web Development</HoveredLink>
                        <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                        <HoveredLink href="/branding">Branding</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Layanan">
                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Pernikahan"
                            href=""
                            src="/assets/images/undangan1.jpg"
                            description="Prepare for tech interviews like never before."
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Portfolio">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">Hobby</HoveredLink>
                        <HoveredLink href="/individual">Individual</HoveredLink>
                        <HoveredLink href="/team">Team</HoveredLink>
                        <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Paket & Harga">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">Hobby</HoveredLink>
                        <HoveredLink href="/individual">Individual</HoveredLink>
                        <HoveredLink href="/team">Team</HoveredLink>
                        <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Testimoni">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">Hobby</HoveredLink>
                        <HoveredLink href="/individual">Individual</HoveredLink>
                        <HoveredLink href="/team">Team</HoveredLink>
                        <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Kontak">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">Hobby</HoveredLink>
                        <HoveredLink href="/individual">Individual</HoveredLink>
                        <HoveredLink href="/team">Team</HoveredLink>
                        <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}

export const products = [
    {
        title: "Undangan 1",
        link: "",
        thumbnail:
            "/assets/images/undangan1.jpg",
    },
    {
        title: "Undangan 2",
        link: "",
        thumbnail:
            "/assets/images/undangan2.jpg",
    },
    {
        title: "Undangan 3",
        link: "",
        thumbnail:
            "/assets/images/undangan3.jpg",
    },
    {
        title: "Kalender 1",
        link: "",
        thumbnail:
            "/assets/images/kalender1.jpg",
    },
    {
        title: "Tabloid 1",
        link: "",
        thumbnail:
            "/assets/images/tabloid1.png",
    },
    {
        title: "Yasin 1",
        link: "",
        thumbnail:
            "/assets/images/yasin1.jpg",
    },
];

function ComponentsHomePage() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const images = [
        "/assets/images/undangan1.jpg",
        "/assets/images/undangan2.jpg",
        "/assets/images/undangan3.jpg",
        "/assets/images/kalender1.jpg",
        "/assets/images/tabloid1.png",
        "/assets/images/yasin1.jpg"
    ];
    // const title = ["Percetakan","Bandar Lampung"];
    const words = ["Undangan Web", "Undangan Pernikahan", "Kalender Tahunan", "Tabloid / Majalah", "Banner", "Aqiqah & Tasmiyah", "Buku Yasin", "Dan Masih Banyak Lagi"];

    return (
        <>
            <div className="relative w-full bg-black/30">
                {!isMobile ? (
                    <>
                        <Navbar className="top-2 md:top-0" />
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
                                    className="z-50 flex flex-col justify-center items-center"
                                >
                                    <Spotlight
                                        className="-top-40 left-0 md:left-60 md:-top-20"
                                        fill="white"
                                    />
                                    <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-10">
                                        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-white">
                                            Percetakan
                                            <span className="text-secondary font-bold">
                                                Media
                                            </span><br />
                                            Melayani <FlipWords className="text-white" words={words} />
                                        </h1>
                                        <p className="mt-4 font-normal text-base text-white max-w-full text-center mx-auto">
                                            Kami hadir untuk menjadikan setiap momen Anda lebih berkesan dengan kualitas cetak terbaik. Dari undangan pernikahan hingga banner promosi, <br /> semua produk kami didesain dengan perhatian penuh pada detail, memastikan kepuasan dan hasil maksimal. <br /> Dapatkan solusi cetak yang kreatif, cepat, dan berkualitas hanya di Percetakan Media!
                                        </p>
                                    </div>
                                </motion.div>
                            </BackgroundBeamsWithCollision>
                        </ImagesSlider>
                        <HeroParallax products={products} />
                    </>
                ) : (
                    <>
                        <div className="relative min-h-screen">
                            <div className="pb-16">
                                ini konten mobile
                            </div>
                            <ComponentsNavMobile />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default ComponentsHomePage