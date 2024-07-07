import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  tag?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

export const Title: React.FC<TitleProps> = ({ children, className, variants, tag = 'h2' }) => {
  const Component = motion(tag);

  return (
    <Component
      variants={variants}
      className={cn(
        `scroll-m-20 fade-in-100 text-basic font-goggleSans font-bold tracking-tight transition-colors first:mt-0`,
        {
          'text-[32px]': tag === 'h2',
          'text-[28px]': tag === 'h3',
          'text-[24px]': tag === 'h4',
          'text-[20px]': tag === 'h5',
          'text-[16px]': tag === 'h6',
        },
        className
      )}
    >
      {children}
    </Component>
  );
};