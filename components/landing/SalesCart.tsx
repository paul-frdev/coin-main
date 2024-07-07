"use client";

import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import React from "react";

interface SalesCartProps {
  className?: string;
  children: React.ReactNode;
  variants?: Variants;
}

export const SalesCart: React.FC<SalesCartProps> = ({ className, children, variants }) => {
  return (
    <motion.div variants={variants} className={cn(`w-full max-w-[1200] h-auto bg-white px-6 py-8 rounded-3xl`, className)}>
      {children}
    </motion.div>
  );
};
