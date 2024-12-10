"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import FooterComponents from "../component/Footer";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FcInvite } from "react-icons/fc";
import {
  // IconBrandGithub,
  // IconBrandX,
  // IconExchange,
  IconHome,
  // IconNewSection,
  // IconTerminal2,
  // FcInvite
} from "@tabler/icons-react";
import UndanganDigitalComponents from "../component/undangan_digital/services";

const links = [
  {
    title: "Beranda",
    icon: (
      <IconHome className="h-full w-full text-white" />
    ),
    href: "/",
  },

  {
    title: "Undangan Digital",
    icon: (
      <FcInvite className="h-full w-full text-white" />
    ),
    href: "/undangan-digital",
  },
  // {
  //   title: "Portfolio",
  //   icon: (
  //     <IconNewSection className="h-full w-full text-white" />
  //   ),
  //   href: "#",
  // },
  // {
  //   title: "Paket & Harga",
  //   icon: (
  //     <IconExchange className="h-full w-full text-white" />
  //   ),
  //   href: "#",
  // },

  // {
  //   title: "Testimoni",
  //   icon: (
  //     <IconBrandX className="h-full w-full text-white" />
  //   ),
  //   href: "#",
  // },
  // {
  //   title: "Kontak",
  //   icon: (
  //     <IconBrandGithub className="h-full w-full text-white" />
  //   ),
  //   href: "#",
  // },
];

function LayananPage({ className }: { className?: string }) {
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
            {/* <HeroDekstop /> */}
            {/* Hero Tutup */}

            {/* Services Buka */}
            <UndanganDigitalComponents />
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
          </>
        ) : (
          <>
            {/* <div className="relative h-screen w-full"> */}

            {/* Footer Buka */}
            <FooterComponents />
            {/* Footer Tutup */}

            {/* Hero Buka */}
            {/* <HeroDekstop /> */}
            {/* Hero Tutup */}

            {/* Services Buka */}
            <UndanganDigitalComponents />
            {/* Services Tutup */}

            {/* Advertisement Buka*/}
            {/* <AdvertisementComponents /> */}
            {/* Advertisement Tutup*/}

            {/* Client Buka */}
            {/* <ClientComponents /> */}
            {/* Client Tutup */}

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

export default LayananPage;
