"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import { LinkHref } from "./ui/LinkHref";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Person } from '@/icons/person';
import { cn } from '@/lib/utils';
import { navItems } from '@/constants';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(`${window.innerHeight - 65}px`);
    }
  }, []);

  const handleLinkClick = (href: string) => {
    router.push(href);
    onClose(); // Close the menu when a link is clicked
  };


  const containerVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: height,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const listVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-nav"
          variants={containerVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className={cn(
            `w-full z-20 bg-white fixed top-[65px] right-0 left-0 overflow-y-auto`
          )}
        >
          <motion.ul
            variants={listVariants}
            className="flex flex-col justify-center sm:justify-start items-center sm:items-start gap-y-8 w-full max-w-[328px] mx-auto mt-20 mb-8"
          >
            {navItems.map((item) => {
              if (item.id <= 4) {
                return (
                  <motion.li key={item.id} variants={itemVariants}>
                    <Link onClick={() => handleLinkClick(item.src!)} className="text-[16px] leading-[24px] text-colorTitle font-goggleSans font-medium" href={item.src!}>
                      {item.title}
                    </Link>
                  </motion.li>
                );
              }
              return (
                <motion.span
                  key={item.id}
                  variants={itemVariants}
                  className="flex flex-col justify-center sm:justify-start items-center sm:items-start gap-y-4"
                >
                  <Button
                    onClick={() => {
                      router.push("/sign-in");
                      onClose();
                    }}
                    className={cn(`justify-center gap-x-2 items-center md:hidden uppercase`, pathname === "/selling-page" ? "hidden" : "flex")}
                  >
                    <Person />
                    Log in
                  </Button>
                  <LinkHref onClick={onClose} className="text-[16px] leading-[24px] text-colorTitle font-goggleSans font-medium no-underline" href="mailto:support@academy.io">
                    {item.title}
                  </LinkHref>
                </motion.span>
              );
            })}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};