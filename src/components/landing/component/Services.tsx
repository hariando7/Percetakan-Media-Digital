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

function ServicesComponents() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const tabs = [
    {
      title: "Semua Kategori",
      value: "Semua Kategori",
      content: (
        <>
          <div className="">
            <Image
              src="/assets/images/logo-horizontal.png"
              width={400}
              height={200}
              alt="Percetakan Media"
              className=""
            />
          </div>
          <div className="w-full h-[440px] relative overflow-hidden rounded-xl p-6 md:p-10 bg-gradient-to-br from-primary/80 via-primary to-primary shadow-lg border border-primary transition-transform hover:scale-105 hover:shadow-2xl">
            <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
              Semua Kategori
            </p>
            <Image
              src="/assets/images/undangan1.jpg"
              alt="dummy image"
              width="500"
              height="500"
              className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
            />
          </div>
        </>
      ),
    },
    {
      title: "Undangan Digital",
      value: "UndanganDigital",
      content: (
        <>
          <div className="">
            <Image
              src="/assets/images/logo-horizontal.png"
              width={400}
              height={200}
              alt="Percetakan Media"
              className=""
            />
          </div>
          <div className="w-full h-[400px] relative overflow-hidden rounded-xl p-6 md:p-10 bg-gradient-to-br from-primary/80 via-primary to-primary shadow-lg border border-primary transition-transform hover:scale-105 hover:shadow-2xl">
            <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
              Undangan Digital
            </p>
            <Image
              src="/assets/images/undangan1.jpg"
              alt="dummy image"
              width="500"
              height="500"
              className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
            />
          </div>
        </>
      ),
    },
    {
      title: "Undangan Cetak",
      value: "Undangan Cetak",
      content: (
        <>
          <div className="">
            <Image
              src="/assets/images/logo-horizontal.png"
              width={400}
              height={200}
              alt="Percetakan Media"
              className=""
            />
          </div>
          <div className="w-full h-[400px] relative overflow-hidden rounded-xl p-6 md:p-10 bg-gradient-to-br from-primary/80 via-primary to-primary shadow-lg border border-primary transition-transform hover:scale-105 hover:shadow-2xl">
            <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
              Undangan Cetak
            </p>
            <Image
              src="/assets/images/undangan1.jpg"
              alt="dummy image"
              width="500"
              height="500"
              className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
            />
          </div>
        </>
      ),
    },
    {
      title: "Tabloid",
      value: "Tabloid",
      content: (
        <>
          <div className="">
            <Image
              src="/assets/images/logo-horizontal.png"
              width={400}
              height={200}
              alt="Percetakan Media"
              className=""
            />
          </div>
          <div className="w-full h-[400px] relative overflow-hidden rounded-xl p-6 md:p-10 bg-gradient-to-br from-primary/80 via-primary to-primary shadow-lg border border-primary transition-transform hover:scale-105 hover:shadow-2xl">
            <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
              Tabloid
            </p>
            <Image
              src="/assets/images/undangan1.jpg"
              alt="dummy image"
              width="500"
              height="500"
              className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
            />
          </div>
        </>
      ),
    },
  ];

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );

  const semuakategori = [
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

  const undangandigital = [
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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

  const undangancetak = [
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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

  const tabloid = [
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
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
      title: "SemuaKategori",
      value: "SemuaKategori",
      content: (
        <BentoGrid className="max-w-4xl mx-auto">
          {semuakategori.map((item, i) => (
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
      title: "UndanganDigital",
      value: "UndanganDigital",
      content: (
        <BentoGrid className="max-w-4xl mx-auto">
          {undangandigital.map((item, i) => (
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
      title: "UndanganCetak",
      value: "UndanganCetak",
      content: (
        <BentoGrid className="max-w-4xl mx-auto">
          {undangancetak.map((item, i) => (
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
      title: "Tabloid",
      value: "Tabloid",
      content: (
        <BentoGrid className="max-w-4xl mx-auto">
          {tabloid.map((item, i) => (
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

  return (
    <>
      {!isMobile ? (
        <>
          <section className="bg-gradient-to-b from-white via-white to-white animate-gradient">
            <div className="h-[900px] w-full p-10 flex justify-between [perspective:1000px] relative flex-col max-w-7xl mx-auto items-start">
              <h1 className="text-primary hover:text-secondary font-bold text-4xl text-center justify-center m-auto flex mb-10 pt-10">
                Layanan Jasa Kami
              </h1>
              <Tabs tabs={tabs} tabsCard={tabsCard} />
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="bg-gradient-to-b from-white via-white to-white animate-gradient">
            <div className="h-[1500px] md:h-[900px] w-full p-10 md:p-10 flex justify-between [perspective:1000px] relative flex-col max-w-7xl mx-auto items-start">
              <h1 className="text-primary hover:text-secondary font-bold text-center justify-center m-auto flex mb-6 pt-4 md:mb-10 md:pt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Layanan Jasa Kami
              </h1>
              <Tabs tabs={tabs} tabsCard={tabsCard} />
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default ServicesComponents;
