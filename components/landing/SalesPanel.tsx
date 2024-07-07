"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "../ui/Button";
import { useTimer } from "@/hooks/useTimer";
import { Timer } from "@/icons/timer";
import { cn } from "@/lib/utils";

export const SalesPanel = ({ className }: { className?: string }) => {
  const { formattedTime } = useTimer();
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY > 80 && scrollY < documentHeight - windowHeight - 500) {
        setIsVisible(true);
        controls.start("visible");
      } else {
        setIsVisible(false);
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={variants}
      className={cn(
        `flex justify-between items-center w-full max-w-[384px] rounded-3xl gap-x-2 bg-bgBlue p-2`,
        className,
        isVisible ? "fixed top-4 left-1/2 transform translate-x-1/2 z-50 inset-x-0 mx-auto" : "hidden"
      )}
    >
      <p className="flex flex-col justify-center items-center bg-white w-[94px] h-[40px] rounded-3xl">
        <span className="text-[#959BF1] font-goggleSans font-bold text-sm leading-[21px] tracking-[0.21px] line-through inline -mb-[7px]">$15.99</span>
        <span className="text-[#ED9F72] font-goggleSans font-bold text-lg tracking-[0.27px] inline">$7.99</span>
      </p>
      <p className="flex w-[97px] h-[34px] justify-between items-center">
        <span className="block mr-1">
          <Timer />
        </span>
        <span className="text-[26px] tracking-[0.25px] text-white font-goggleSans font-bold">{formattedTime}</span>
      </p>
      <div>
        <Button variant="buttonPrimaryOrange" className="uppercase bg-[#5EB25D] hover:bg-[#58A657] max-w-[127px] w-full whitespace-nowrap">
          Try Now
        </Button>
      </div>
    </motion.div>
  );
};