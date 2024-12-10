"use client";

import React from "react";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import {
  BentoGrid,
  BentoGridItem,
} from "@/components/ui/bento-grid-undangan-digital";
import {
  IconArrowWaveRightUp,
  // IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Link from "next/link";
import { TabsUndanganDigital } from "@/components/ui/tabs_undangan_digital";
import { FlipWords } from "@/components/ui/flip-words";
import { BsWhatsapp } from "react-icons/bs";

function UndanganDigitalComponents() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleWhatsAppClick = (productName: string, productPrice: string) => {
    const message = `Halo, saya tertarik dengan undangan digital ${productName}. Berikut detail nya:
  - Harga: ${productPrice} Apakah tersedia? Mohon informasinya. Terima kasih!`;
    window.location.href = `https://wa.me/62895637316999?text=${encodeURIComponent(
      message
    )}`;
  };

  const tabs = [
    {
      title: "Tema Pilihan",
      value: "Tema Pilihan",
      content: <></>,
    },
    {
      title: "Tema Premium",
      value: "Tema Premium",
      content: <></>,
    },
    {
      title: "Tema Khitan",
      value: "Tema Khitan",
      content: <></>,
    },
    {
      title: "Tema Tasmiyah/Aqiqah",
      value: "Tema Tasmiyah/Aqiqah",
      content: <></>,
    },
    {
      title: "Tema Adat",
      value: "Tema Adat",
      content: <></>,
    },
    {
      title: "Tema Anniversary",
      value: "Tema Anniversary",
      content: <></>,
    },
    {
      title: "Tema Brithday",
      value: "Tema Brithday",
      content: <></>,
    },
    {
      title: "Tema Elegant",
      value: "Tema Elegant",
      content: <></>,
    },
    {
      title: "Tema Engagementday",
      value: "Tema Engagementday",
      content: <></>,
    },
    {
      title: "Tema Floral",
      value: "Tema Floral",
      content: <></>,
    },
    {
      title: "Tema Minimalist",
      value: "Tema Minimalist",
      content: <></>,
    },
    {
      title: "Tema Watercolor",
      value: "Tema Watercolor",
      content: <></>,
    },
    {
      title: "Tema Others",
      value: "Tema Others",
      content: <></>,
    },
  ];

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );

  const temapilihan = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
    },
  ];

  const temaPremium = [
    // Tema Premium 1
    {
      title: "Tema Premium 1",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/premium-01", "_blank")
            }
            src="/assets/images/premium1.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() => handleWhatsAppClick("Tema Premium 1", "Rp 99.000")}
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/premium-01", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Premium 2
    {
      title: "Tema Premium 2",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/premium-02", "_blank")
            }
            src="/assets/images/premium2.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() => handleWhatsAppClick("Tema Premium 2", "Rp 99.000")}
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/premium-02", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Premium 3
    {
      title: "Tema Premium 3",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/premium-03", "_blank")
            }
            src="/assets/images/premium3.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() => handleWhatsAppClick("Tema Premium 3", "Rp 99.000")}
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/premium-03", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Premium 4
    {
      title: "Tema Premium 4",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/premium-04", "_blank")
            }
            src="/assets/images/premium4.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() => handleWhatsAppClick("Tema Premium 4", "Rp 99.000")}
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/premium-04", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Premium 5
    {
      title: "Tema Premium 5",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/premium-05", "_blank")
            }
            src="/assets/images/premium5.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() => handleWhatsAppClick("Tema Premium 5", "Rp 99.000")}
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/premium-05", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Premium 6
    {
      title: "Tema Premium 6",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/premium-06", "_blank")
            }
            src="/assets/images/premium6.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() => handleWhatsAppClick("Tema Premium 6", "Rp 99.000")}
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/premium-06", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Premium 7
    {
      title: "Tema Premium 7",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/premium-07", "_blank")
            }
            src="/assets/images/premium7.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() => handleWhatsAppClick("Tema Premium 7", "Rp 99.000")}
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/premium-07", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Premium 8
    {
      title: "Tema Premium 8",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/premium-08", "_blank")
            }
            src="/assets/images/premium8.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() => handleWhatsAppClick("Tema Premium 8", "Rp 99.000")}
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/premium-08", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Premium 9
    {
      title: "Tema Premium 9",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/premium-09", "_blank")
            }
            src="/assets/images/premium9.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() => handleWhatsAppClick("Tema Premium 9", "Rp 99.000")}
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/premium-09", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Premium 10
    {
      title: "Tema Premium 10",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/premium-10", "_blank")
            }
            src="/assets/images/premium10.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Premium 10", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/premium-10", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Premium 11
    {
      title: "Tema Premium 11",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/premium-11", "_blank")
            }
            src="/assets/images/premium11.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Premium 11", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/premium-11", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Premium 12
    {
      title: "Tema Premium 12",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/premium-12", "_blank")
            }
            src="/assets/images/premium12.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Premium 12", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/premium-12", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Premium 13
    {
      title: "Tema Premium 13",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/premium-13", "_blank")
            }
            src="/assets/images/premium13.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Premium 13", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/premium-13", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Premium 14
    {
      title: "Tema Premium 14",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/premium-14", "_blank")
            }
            src="/assets/images/premium14.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Premium 14", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/premium-14", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Premium 15
    {
      title: "Tema Premium 15",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/premium-15", "_blank")
            }
            src="/assets/images/premium15.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Premium 15", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/premium-15", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Premium 16
    {
      title: "Tema Premium 16",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/premium-16", "_blank")
            }
            src="/assets/images/premium16.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Premium 16", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/premium-16", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },
  ];

  const temaKhitan = [
    // Tema Khitan 1
    {
      title: "Tema Khitan 1",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/khitan-01", "_blank")
            }
            src="/assets/images/khitan1.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() => handleWhatsAppClick("Tema Khitan 1", "Rp 99.000")}
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/khitan-01", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Khitan 2
    {
      title: "Tema Khitan 2",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/khitan-02", "_blank")
            }
            src="/assets/images/khitan2.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() => handleWhatsAppClick("Tema Khitan 2", "Rp 99.000")}
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/khitan-02", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Khitan 3
    {
      title: "Tema Khitan 3",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/khitan-03", "_blank")
            }
            src="/assets/images/khitan3.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() => handleWhatsAppClick("Tema Khitan 3", "Rp 99.000")}
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/khitan-03", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },
  ];

  const temaTasmiyahAqiqah = [
    // Tema TasmiyahAqiqah 1
    {
      title: "Tema Tasmiyah Aqiqah 1",
      header: (
        <>
          <Image
            onClick={() =>
              window.open(
                "https://percetakanmedia.com/tasmiyah-aqiqah-01/",
                "_blank"
              )
            }
            src="/assets/images/tasmiyahAqiqah1.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Tasmiyah Aqiqah 1", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://percetakanmedia.com/tasmiyah-aqiqah-01/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema TasmiyahAqiqah 2
    {
      title: "Tema Tasmiyah Aqiqah 2",
      header: (
        <>
          <Image
            onClick={() =>
              window.open(
                "https://percetakanmedia.com/tasmiyah-aqiqah-02/",
                "_blank"
              )
            }
            src="/assets/images/tasmiyahAqiqah2.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Tasmiyah Aqiqah 2", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://percetakanmedia.com/tasmiyah-aqiqah-02/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },
  ];

  const temaAdat = [
    // Tema Adat 1 Bali
    {
      title: "Tema Adat Bali",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/adat-bali/", "_blank")
            }
            src="/assets/images/adat-bali.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() => handleWhatsAppClick("Tema Adat Bali", "Rp 99.000")}
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/adat-bali/", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Adat 2 Banjar
    {
      title: "Tema Adat Banjar",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/adat-banjar/", "_blank")
            }
            src="/assets/images/adat-banjar.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Adat Banjar", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://percetakanmedia.com/adat-banjar/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Adat 3 Batak
    {
      title: "Tema Adat Batak",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/adat-batak/", "_blank")
            }
            src="/assets/images/adat-batak.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Adat Batak", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/adat-batak/", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Adat 4 Betawi
    {
      title: "Tema Adat Betawi",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/adat-betawi/", "_blank")
            }
            src="/assets/images/adat-betawi.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Adat Betawi", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://percetakanmedia.com/adat-betawi/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Adat 5 Bugis
    {
      title: "Tema Adat Bugis",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/adat-bugis/", "_blank")
            }
            src="/assets/images/adat-bugis.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Adat Bugis", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/adat-bugis/", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Adat 6 Jawa
    {
      title: "Tema Adat 6 Jawa",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/adat-jawa/", "_blank")
            }
            src="/assets/images/adat-jawa.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() => handleWhatsAppClick("Tema Adat Jawa", "Rp 99.000")}
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/adat-jawa/", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Adat 7 Jawa Batik
    {
      title: "Tema Adat Jawa Batik",
      header: (
        <>
          <Image
            onClick={() =>
              window.open(
                "https://percetakanmedia.com/adat-jawa-batik/",
                "_blank"
              )
            }
            src="/assets/images/adat-jawa-batik.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Adat Jawa Batik", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://percetakanmedia.com/adat-jawa-batik/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Adat 8 Minang
    {
      title: "Tema Adat Minang",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/adat-minang/", "_blank")
            }
            src="/assets/images/adat-minang.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Adat Minang", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://percetakanmedia.com/adat-minang/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Adat 9 Kalimantan
    {
      title: "Tema Adat Kalimantan",
      header: (
        <>
          <Image
            onClick={() =>
              window.open(
                "https://percetakanmedia.com/adat-kalimantan/",
                "_blank"
              )
            }
            src="/assets/images/adat-kalimantan.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Adat Kalimantan", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://percetakanmedia.com/adat-kalimantan/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Adat 10 Papua
    {
      title: "Tema Adat Papua",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/adat-papua/", "_blank")
            }
            src="/assets/images/adat-papua.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Adat Papua", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/adat-papua/", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Adat 11 Sunda
    {
      title: "Tema Adat Sunda",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/adat-sunda/", "_blank")
            }
            src="/assets/images/adat-sunda.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Adat Sunda", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/adat-sunda/", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },
  ];

  const temaAnniversary = [
    // Tema Anniversary 1
    {
      title: "Tema Anniversary 1",
      header: (
        <>
          <Image
            onClick={() =>
              window.open(
                "https://percetakanmedia.com/anniversary-01/",
                "_blank"
              )
            }
            src="/assets/images/anniversary1.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Anniversary 1", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://percetakanmedia.com/anniversary-01/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Anniversary 2
    {
      title: "Tema Anniversary 2",
      header: (
        <>
          <Image
            onClick={() =>
              window.open(
                "https://percetakanmedia.com/anniversary-02/",
                "_blank"
              )
            }
            src="/assets/images/anniversary2.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Anniversary 2", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://percetakanmedia.com/anniversary-02/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },
  ];

  const temaBrithday = [
    // Tema Brithday 1
    {
      title: "Tema Brithday 1",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/birthday-01/", "_blank")
            }
            src="/assets/images/birthday1.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Birthday 1", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://percetakanmedia.com/birthday-01/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Brithday 2
    {
      title: "Tema Brithday 2",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/birthday-02/", "_blank")
            }
            src="/assets/images/birthday2.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Birthday 2", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://percetakanmedia.com/birthday-02/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Brithday 3
    {
      title: "Tema Brithday 3",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/birthday-03/", "_blank")
            }
            src="/assets/images/birthday3.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Birthday 3", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://percetakanmedia.com/birthday-03/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Brithday 4
    {
      title: "Tema Brithday 4",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/birthday-04/", "_blank")
            }
            src="/assets/images/birthday4.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Birthday 4", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://percetakanmedia.com/birthday-04/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },
  ];

  const temaElegant = [
    // Tema Elegant 1
    {
      title: "Tema Elegant",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("https://percetakanmedia.com/elegant-01/", "_blank")
            }
            src="/assets/images/elegant.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() => handleWhatsAppClick("Tema Elegant", "Rp 99.000")}
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open("https://percetakanmedia.com/elegant-01/", "_blank")
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },
  ];

  const temaEngagementday = [
    // Tema Engagementday 1
    {
      title: "Tema Engagementday 1",
      header: (
        <>
          <Image
            onClick={() =>
              window.open(
                "https://percetakanmedia.com/engagementday-01/",
                "_blank"
              )
            }
            src="/assets/images/engagementday1.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Engagementday 1", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://percetakanmedia.com/engagementday-01/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Engagementday 2
    {
      title: "Tema Engagementday 2",
      header: (
        <>
          <Image
            onClick={() =>
              window.open(
                "https://percetakanmedia.com/engagementday-02/",
                "_blank"
              )
            }
            src="/assets/images/engagementday2.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Engagementday 2", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://percetakanmedia.com/engagementday-02/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Engagementday 3
    {
      title: "Tema Engagementday 3",
      header: (
        <>
          <Image
            onClick={() =>
              window.open(
                "https://percetakanmedia.com/engagementday-03/",
                "_blank"
              )
            }
            src="/assets/images/engagementday3.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Engagementday 3", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://percetakanmedia.com/engagementday-03/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },

    // Tema Engagementday 4
    {
      title: "Tema Engagementday 4",
      header: (
        <>
          <Image
            onClick={() =>
              window.open(
                "https://percetakanmedia.com/engagementday-04/",
                "_blank"
              )
            }
            src="/assets/images/engagementday3.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <div className="flex gap-2 justify-left mb-2">
            <p className="text-xs md:text-sm items-center justify-center flex text-secondary line-through">
              Rp. 150.000
            </p>
            <p className="text-sm md:text-sm text-primary items-center justify-center flex">
              Rp. 99.000
            </p>
          </div>

          <div className="flex gap-2 cursor-pointer justify-between">
            <button
              onClick={() =>
                handleWhatsAppClick("Tema Engagementday 4", "Rp 99.000")
              }
              className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-secondary bg-transparent text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
            >
              <div className="flex gap-2">
                <p className="sm:text-base md:text-xs text-primary items-center justify-center flex">
                  Pesan Sekarang{" "}
                </p>
                <BsWhatsapp className="w-7 h-7 text-green-700 items-center justify-center flex m-auto" />
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-sm border-green-500 bg-green-600 text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://percetakanmedia.com/engagementday-04/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          </div>
        </>
      ),
    },
  ];

  const temaFloral = [
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div
            className="div"
            onClick={() =>
              (window.location.href =
                "https://wa.me/62895637316999?text=Halo%YAYA%,%20saya%20ingin%20bertanya%20tentang%20Produk%201,%20harga%20dan%20lain-lain")
            }
          >
            Kontak saya
          </div>
        </>
      ),
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
    },
  ];

  const temaMinimalist = [
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div
            className="div"
            onClick={() =>
              (window.location.href =
                "https://wa.me/62895637316999?text=Halo%YAYA%,%20saya%20ingin%20bertanya%20tentang%20Produk%201,%20harga%20dan%20lain-lain")
            }
          >
            Kontak saya
          </div>
        </>
      ),
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
    },
  ];

  const temaWatercolor = [
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div
            className="div"
            onClick={() =>
              (window.location.href =
                "https://wa.me/62895637316999?text=Halo%YAYA%,%20saya%20ingin%20bertanya%20tentang%20Produk%201,%20harga%20dan%20lain-lain")
            }
          >
            Kontak saya
          </div>
        </>
      ),
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
    },
  ];

  const temaOthers = [
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div
            className="div"
            onClick={() =>
              (window.location.href =
                "https://wa.me/62895637316999?text=Halo%YAYA%,%20saya%20ingin%20bertanya%20tentang%20Produk%201,%20harga%20dan%20lain-lain")
            }
          >
            Kontak saya
          </div>
        </>
      ),
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
    },
  ];

  const tabsCard = [
    {
      title: "Tema Pilihan",
      value: "Tema Pilihan",
      content: (
        <BentoGrid className="max-w-4xl md:max-w-full mx-auto">
          {temapilihan.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 1 || i === 8 ? "md:col-span-1" : "bg-white"}
            />
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "Tema Premium",
      value: "Tema Premium",
      content: (
        <BentoGrid className="max-w-4xl md:max-w-full mx-auto">
          {temaPremium.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 1 || i === 8 ? "md:col-span-1" : "bg-white"}
            />
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "Tema Khitan",
      value: "Tema Khitan",
      content: (
        <BentoGrid className="max-w-4xl md:max-w-full mx-auto">
          {temaKhitan.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 1 || i === 8 ? "md:col-span-1" : "bg-white"}
            />
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "Tema Tasmiyah/Aqiqah",
      value: "Tema Tasmiyah/Aqiqah",
      content: (
        <BentoGrid className="max-w-4xl md:max-w-full mx-auto">
          {temaTasmiyahAqiqah.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 1 || i === 8 ? "md:col-span-1" : "bg-white"}
            />
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "Tema Adat",
      value: "Tema Adat",
      content: (
        <BentoGrid className="max-w-4xl md:max-w-full mx-auto">
          {temaAdat.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 1 || i === 8 ? "md:col-span-1" : "bg-white"}
            />
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "Tema Anniversary",
      value: "Tema Anniversary",
      content: (
        <BentoGrid className="max-w-4xl md:max-w-full mx-auto">
          {temaAnniversary.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 1 || i === 8 ? "md:col-span-1" : "bg-white"}
            />
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "Tema Brithday",
      value: "Tema Brithday",
      content: (
        <BentoGrid className="max-w-4xl md:max-w-full mx-auto">
          {temaBrithday.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 1 || i === 8 ? "md:col-span-1" : "bg-white"}
            />
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "Tema Elegant",
      value: "Tema Elegant",
      content: (
        <BentoGrid className="max-w-4xl md:max-w-full mx-auto">
          {temaElegant.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 1 || i === 8 ? "md:col-span-1" : "bg-white"}
            />
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "Tema Engagementday",
      value: "Tema Engagementday",
      content: (
        <BentoGrid className="max-w-4xl md:max-w-full mx-auto">
          {temaEngagementday.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 1 || i === 8 ? "md:col-span-1" : "bg-white"}
            />
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "Tema Floral",
      value: "Tema Floral",
      content: (
        <BentoGrid className="max-w-4xl md:max-w-full mx-auto">
          {temaFloral.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 1 || i === 8 ? "md:col-span-1" : "bg-white"}
            />
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "Tema Minimalist",
      value: "Tema Minimalist",
      content: (
        <BentoGrid className="max-w-4xl md:max-w-full mx-auto">
          {temaMinimalist.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 1 || i === 8 ? "md:col-span-1" : "bg-white"}
            />
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "Tema Watercolor",
      value: "Tema Watercolor",
      content: (
        <BentoGrid className="max-w-4xl md:max-w-full mx-auto">
          {temaWatercolor.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 1 || i === 8 ? "md:col-span-1" : "bg-white"}
            />
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "Tema Others",
      value: "Tema Others",
      content: (
        <BentoGrid className="max-w-4xl md:max-w-full mx-auto">
          {temaOthers.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 1 || i === 8 ? "md:col-span-1" : "bg-white"}
            />
          ))}
        </BentoGrid>
      ),
    },
  ];

  const words = [
    "Tema Premium",
    "Tema Khitan",
    "Tema Tasmiyah Aqiqah",
    "Tema Adat",
    "Tema Anniversary",
    "Tema Brithday",
    "Tema Elegant",
    "Tema Engagementday",
    "Tema Floral",
    "Tema Minimalist",
    "Tema Watercolor",
    "Tema Others",
  ];

  return (
    <>
      {!isMobile ? (
        <>
          <section className="bg-gradient-to-b from-white via-white to-white animate-gradient">
            {/* konten */}
            <div className="h-[1000px] w-full p-10 flex justify-between [perspective:1000px] relative flex-col max-w-7xl mx-auto items-start mt-20">
              <h1 className="font-bold text-4xl text-center justify-center m-auto flex mb-10 pt-10 text-primary hover:text-secondary">
                Undangan Digital{" "}
                <FlipWords className="text-secondary" words={words} />
              </h1>
              <TabsUndanganDigital tabs={tabs} tabsCard={tabsCard} />
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="bg-gradient-to-b from-white via-white to-white animate-gradient">
            {/* konten */}
            <div className="h-[2900px] md:h-[900px] w-full p-10 md:p-10 flex justify-between [perspective:1000px] relative flex-col max-w-7xl mx-auto items-start">
              <Image
                src="/assets/images/logo-horizontal.png"
                width={400}
                height={200}
                alt="Percetakan Media"
                className=""
              />
              {/* <Link
                href={"/"}
                className="px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg border-primary bg-primary text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer flex justify-center m-auto"
              >
                Halaman Utama
              </Link> */}
              <div className="pt-4 pb-4 justify-center m-auto">
                <h1 className="font-bold text-center justify-center m-auto flex text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-primary hover:text-secondary">
                  Undangan Digital
                </h1>
                <h1 className="font-bold text-center justify-center m-auto flex text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-primary hover:text-secondary">
                  <FlipWords className="text-secondary" words={words} />
                </h1>
              </div>
              <TabsUndanganDigital tabs={tabs} tabsCard={tabsCard} />
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default UndanganDigitalComponents;
