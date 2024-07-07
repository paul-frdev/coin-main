"use client";

import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}
export const Container = ({ children, className, variants }: ContainerProps) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={"animate"}
      viewport={{ once: false, amount: 0.3 }}
      className={cn(`w-full max-w-[1230px] px-[15px] m-auto`, className)}
    >
      {children}
    </motion.div>
  );
};
