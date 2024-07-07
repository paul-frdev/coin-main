import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const LinkHref = ({ href, children, className, onClick, }: { href: string; children: string; className?: string, onClick?: () => void }) => {
  return (
    <Link onClick={onClick} className={cn(`text-[12px] font-goggleSans font-normal tracking-[0.4px] leading-[18px] text-[#ED9F72] underline`, className)} href={href}>
      {children}
    </Link>
  );
};
