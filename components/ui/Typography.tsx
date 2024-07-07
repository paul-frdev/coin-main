import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import React from "react";

export const Typography = ({ children, className, variants }: { children: React.ReactNode; className?: string; variants?: Variants }) => {
  return (
    <motion.p
      variants={variants}
      className={cn(`w-full max-w-[524px] text-gray text-[12px] leading-[16px] tracking-[0.4px] font-goggleSans font-normal text-center`, className)}
    >
      {children}
    </motion.p>
  );
};
