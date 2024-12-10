"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import HeroDekstop from "../component/Hero";
import ServicesComponents from "../component/Services";
import AdvertisementComponents from "../component/Advertisement";
import ClientComponents from "../component/Client";
import FooterComponents from "../component/Footer";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  // IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  // IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

const links = [
  {
    title: "Beranda",
    icon: (
      <IconHome className="h-full w-full text-white" />
    ),
    href: "#",
  },

  {
    title: "Layanan",
    icon: (
      <IconTerminal2 className="h-full w-full text-white" />
    ),
    href: "#",
  },
  // {
  //   title: "Portfolio",
  //   icon: (
  //     <IconNewSection className="h-full w-full text-white" />
  //   ),
  //   href: "#",
  // },
  {
    title: "Paket & Harga",
    icon: (
      <IconExchange className="h-full w-full text-white" />
    ),
    href: "#",
  },

  {
    title: "Testimoni",
    icon: (
      <IconBrandX className="h-full w-full text-white" />
    ),
    href: "#",
  },
  // {
  //   title: "Kontak",
  //   icon: (
  //     <IconBrandGithub className="h-full w-full text-white" />
  //   ),
  //   href: "#",
  // },
];

function HomePage({ className }: { className?: string }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full bg-black/40">
      <>
        {!isMobile ? (
          <>
            <div
              className={cn(
                "fixed top-10 inset-x-0 max-w-full mx-auto z-50",
                className
              )}
            >
              {/* <div className="bg-primary w-full h-full p-2">
      <div className="text-primary-foreground font-bold flex gap-2 justify-between">
        <div className="flex gap-2">
          <p>Instagram</p>
          <p>Facbook</p>
        </div>
        <p>Facbook</p>
      </div>
    </div> */}
              <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Beranda">
                  <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/web-dev">Web Development</HoveredLink>
                    <HoveredLink href="/interface-design">
                      Interface Design
                    </HoveredLink>
                    <HoveredLink href="/seo">
                      Search Engine Optimization
                    </HoveredLink>
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
                {/* <MenuItem setActive={setActive} active={active} item="Portfolio">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/hobby">Hobby</HoveredLink>
          <HoveredLink href="/individual">Individual</HoveredLink>
          <HoveredLink href="/team">Team</HoveredLink>
          <HoveredLink href="/enterprise">Enterprise</HoveredLink>
        </div>
      </MenuItem> */}
                {/* <MenuItem setActive={setActive} active={active} item="Paket & Harga">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/hobby">Hobby</HoveredLink>
          <HoveredLink href="/individual">Individual</HoveredLink>
          <HoveredLink href="/team">Team</HoveredLink>
          <HoveredLink href="/enterprise">Enterprise</HoveredLink>
        </div>
      </MenuItem> */}
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Testimoni"
                >
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
          </>
        ) : (
          <>
            {/* <div className="relative h-screen w-full"> */}

            {/* Hero Buka */}
            <HeroDekstop />
            {/* Hero Tutup */}

            {/* Services Buka */}
            <ServicesComponents />
            {/* Services Tutup */}

            {/* Advertisement Buka*/}
            {/* <AdvertisementComponents /> */}
            {/* Advertisement Tutup*/}

            {/* Client Buka */}
            {/* <ClientComponents /> */}
            {/* Client Tutup */}

            {/* Footer Buka */}
            <FooterComponents />
            {/* Footer Tutup */}

            {/* Nababr buka */}
            <FloatingDock
              className="bottom-0 w-full flex m-auto justify-center fixed"
              items={links}
            />
            {/* Nababr Tutup */}

            {/* </div> */}
          </>
        )}
      </>
    </div>
  );
}

export default HomePage;
