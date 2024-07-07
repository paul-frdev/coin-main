import { fadeIn } from "@/constants/variants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const Subtitle = ({ children, className }: { children: string; className?: string }) => {
  return (
    <motion.p variants={fadeIn} className={cn(`text-[#727AED] text-[16px] font-goggleSans font-bold tracking-[0.1px] font-bold leading-[24px]`, className)}>
      {children}
    </motion.p>
  );
};
