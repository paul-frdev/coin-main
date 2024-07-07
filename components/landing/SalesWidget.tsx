"use client";

import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import React, { ReactNode } from "react";

interface SalesWidgetProps {
  className?: string;
  children: ReactNode;
  variants?: Variants;
}
export const SalesWidget: React.FC<SalesWidgetProps> = ({ children, className, variants }) => {
  return (
    <motion.div variants={variants} className={cn(`bg-white w-full max-w-[260px] h-auto rounded-xl`, className)}>
      {children}
    </motion.div>
  );
};
