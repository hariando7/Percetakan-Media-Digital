"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  tabsCard: propTabsCard,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  tabsCard: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  // const [activeCard, setActiveCard] = useState<Tab>(propTabs[0]);
  const [activeCard, setActiveCard] = useState<Tab>(propTabsCard[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);

    // Sinkronkan activeCard dengan tabsCard
    const newTabsCard = [...propTabsCard];
    const selectedCard = newTabsCard.splice(idx, 1);
    newTabsCard.unshift(selectedCard[0]);
    setActiveCard(newTabsCard[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.value}
            onClick={() => {
              moveSelectedTabToTop(idx);
              setActiveCard(propTabsCard[idx]);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFB84D] shadow-lg rounded-full text-white",
                  activeTabClassName
                )}
              />
            )}
            <span
              className={cn("relative block", {
                "text-white font-bold": active.value === tab.value,
                "text-black": active.value !== tab.value,
              })}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <div className="flex w-full h-full gap-10">
        <FadeInDiv
          tabs={tabs}
          active={active}
          hovering={hovering}
          className={cn("", contentClassName)}
        />
        <FadeInDivCard
          tabsCard={propTabsCard}
          activeCard={activeCard}
          // hovering={hovering}
          className={cn("", contentClassName)}
        />
      </div>
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  active,
  hovering,
}: {
  className?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === active.value;
  };

  return (
    <div className="relative w-1/2 h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            left: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn(
            "w-full h-full absolute top-0 left-0 flex items-center justify-center",
            className
          )}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};

export const FadeInDivCard = ({
  className,
  tabsCard,
  activeCard,
}: // hovering,
{
  className?: string;
  tabsCard: Tab[];
  activeCard: Tab;
  // hovering?: boolean;
}) => {
  return (
    <div className="relative w-full h-full mt-5">
      {tabsCard.map((tab) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            zIndex: tab.value === activeCard.value ? 1 : -1,
            opacity: tab.value === activeCard.value ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
          animate={{
            y: tab.value === activeCard.value ? [0, 40, 0] : 0,
          }}
          className={cn("absolute w-full top-0 left-0 p-4", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};