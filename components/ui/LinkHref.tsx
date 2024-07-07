import { cn } from "@/lib/utils";
import { Variant } from "framer-motion";
import Link from "next/link";
import React from "react";

export const LinkHref = ({ href, children, className }: { href: string; children: string; className?: string }) => {
  return (
    <Link className={cn(`text-[12px] font-goggleSans font-normal tracking-[0.4px] leading-[18px] text-[#ED9F72] underline`, className)} href={href}>
      {children}
    </Link>
  );
};
