"use client";

import { SalesPanel } from "./landing/SalesPanel";
import { MobileNav } from "./MobileNav";
import { Button } from "./ui/Button";
import { Container } from "./ui/container";
import { fadeIn, staggerTextContainer } from "@/constants/variants";
import { Close } from "@/icons/close";
import { Menu } from "@/icons/menu";
import { Person } from "@/icons/person";
import { QuestionMark } from "@/icons/questionMark";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export const Navbar = () => {
  const [logedIn, setLogedIn] = useState(false);
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);

  const route = useRouter();
  const pathname = usePathname();

  const isLogPath = ['/sign-in', '/quiz', '/checkout-results', '/enter-email', '/selling-page', '/selling-page/discount'].includes(pathname)

  return (
    <motion.div
      variants={staggerTextContainer}
      className="font-body relative"
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: true, amount: 0.1 }}
    >
      <Container
        className={cn(
          `mb-[56px] py-2`,
          pathname === "/selling-page"
            ? "grid grid-cols-4 grid-rows-2 md:flex md:justify-between md:items-center"
            : "flex justify-between items-center"
        )}
      >
        <motion.div variants={fadeIn}>
          <Link href="/" className="text-3xl font-logo font-goggleSans font-bold">
            Academy
          </Link>
        </motion.div>
        {pathname === "/selling-page" && (
          <div className="row-start-2 col-start-1 col-end-5 w-full">
            <SalesPanel className="m-auto" />
          </div>
        )}
        <motion.div variants={fadeIn} className="flex justify-end md:justify-between items-center gap-x-6 col-start-3 col-end-5">
          {!logedIn ? (
            <Button
              onClick={() => route.push("/sign-in")}
              variant="buttonPrimaryBlue"
              className={cn(`hidden font-goggleSans font-bold font-bold font-bold uppercase`, isLogPath ? "hidden" : "md:flex")}
            >
              <Person />
              Log in
            </Button>
          ) : null}
          <Button
            variant="buttonPrimaryBlueDestructive"
            className="flex rounded-full h-[45px] shadow-buttonShadow w-[45px] p-0 justify-center items-center hover:bg-transparent hover:border-2 hover:border-[rgba(114, 122, 237, 0.50)]"
          >
            <QuestionMark />
          </Button>
          <Button onClick={() => setIsOpenMobileNav(prev => !prev)} variant="buttonPrimaryOrangeDestructive">
            {isOpenMobileNav ? <Close /> : <Menu />}
          </Button>
        </motion.div>
      </Container>
      <MobileNav isOpen={isOpenMobileNav} />
    </motion.div>
  );
};
