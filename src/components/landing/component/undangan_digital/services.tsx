"use client";

import React from "react";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import Image from "next/image";
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
import Link from "next/link";
import { TabsUndanganDigital } from "@/components/ui/tabs_undangan_digital";
import { FlipWords } from "@/components/ui/flip-words";

function UndanganDigitalComponents() {
  const isMobile = useMediaQuery("(max-width: 768px)");

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
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
  ];

  const temaPremium = [
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
            src="/assets/images/premium1.png"
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
            src="/assets/images/premium1.png"
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
            src="/assets/images/premium1.png"
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
            src="/assets/images/premium1.png"
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
            src="/assets/images/premium1.png"
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

  const temaKhitan = [
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
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
  ];

  const temaTasmiyahAqiqah = [
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
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
  ];

  const temaAdat = [
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
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
  ];

  const temaAnniversary = [
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
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
  ];

  const temaBrithday = [
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
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
  ];

  const temaElegant = [
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
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
  ];

  const temaEngagementday = [
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
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
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
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
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
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
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
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
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
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
  ];

  const tabsCard = [
    {
      title: "Tema Pilihan",
      value: "Tema Pilihan",
      content: (
        <BentoGrid className="max-w-4xl mx-auto">
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
        <BentoGrid className="max-w-4xl mx-auto">
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
        <BentoGrid className="max-w-4xl mx-auto">
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
        <BentoGrid className="max-w-4xl mx-auto">
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
        <BentoGrid className="max-w-4xl mx-auto">
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
        <BentoGrid className="max-w-4xl mx-auto">
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
        <BentoGrid className="max-w-4xl mx-auto">
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
        <BentoGrid className="max-w-4xl mx-auto">
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
        <BentoGrid className="max-w-4xl mx-auto">
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
        <BentoGrid className="max-w-4xl mx-auto">
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
        <BentoGrid className="max-w-4xl mx-auto">
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
        <BentoGrid className="max-w-4xl mx-auto">
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
        <BentoGrid className="max-w-4xl mx-auto">
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
            <div className="h-[800px] w-full p-10 flex justify-between [perspective:1000px] relative flex-col max-w-7xl mx-auto items-start mt-20">
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
            <div className="h-[2700px] md:h-[900px] w-full p-10 md:p-10 flex justify-between [perspective:1000px] relative flex-col max-w-7xl mx-auto items-start">
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
