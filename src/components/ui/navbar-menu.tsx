/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { Loader } from "lucide-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-primary hover:opacity-[0.9] font-bold pt-1 hover:underline hover:underline-offset-8 hover:transition hover:ease-in-out hover:delay-150 hover:duration-300 hover:-translate-y-1 hover:scale-110"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFirstLoading, setIsFirstLoading] = useState(false);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  const handleMouseEnter = () => {
    lettersRef.current.forEach((letter, index) => {
      if (letter) {
        letter.classList.add("fall");
        letter.style.animationDelay = `${index * 0.1}s`; // Ubah durasi sesuai kebutuhan
        letter.addEventListener(
          "animationend",
          () => {
            letter.classList.remove("fall");
          },
          { once: true }
        );
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onMouseLeave={() => setActive(null)}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-input md:rounded-none lg:w-full flex justify-between pl-8 pr-8 transition-transform duration-500 ease-in-out"
    >
      <div className="flex items-center justify-center text-white font-bold">
        <Image
          src="/assets/images/logo.png"
          width={120}
          height={60}
          alt="Percetakan Media"
          className=""
        />
      </div>
      <div className="flex justify-center space-x-6 py-8 px-8">{children}</div>
      <div className="flex items-center justify-center">
        <Link
          href="/login"
          onMouseEnter={handleMouseEnter}
          className="w-full text-[16px] text-center px-6 py-2 bg-gradient-to-r from-primary to-primary text-primary-foreground hover:text-line-10 hover:from-primary/50 hover:to-primary/40 hover:bg-gradient-to-r rounded-lg cursor-pointer transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 hover:rotate-1 shadow-md hover:shadow-xl transform-gpu"
        >
          {isFirstLoading ? (
            <Loader className="animate-spin" />
          ) : (
            <span className="animated-text flex justify-center font-bold">
              {"Daftar".split("").map((letter, index) => (
                <span
                  key={index}
                  ref={(el) => {
                    lettersRef.current[index] = el;
                  }}
                  className="letter transition-transform duration-300 hover:translate-y-[-5px] hover:rotate-[10deg] inline-block"
                >
                  {letter}
                </span>
              ))}
            </span>
          )}
        </Link>
      </div>
    </motion.nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black">{title}</h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
      {children}
    </Link>
  );
};
