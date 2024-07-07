"use client";

import { LinkHref } from "../ui/LinkHref";
import { Title } from "../ui/Title";
import { Typography } from "../ui/Typography";
import { SalesCart } from "./SalesCart";
import backMoneyImage from "/public/images/back-money.png";
import { LeftImageAnim, fadeInLeft, staggerTextContainer } from "@/constants/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const MoneyBack = () => {
  return (
    <motion.div
      variants={staggerTextContainer}
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: false, amount: 0.5 }}
      className="mt-16 overflow-hidden md:mt-28 flex flex-col gap-y-14 md:gap-y-0 justify-between items-center md:flex md:flex-row md:justify-between md:items-center md:gap-x-24 md:max-w-[1064px] md:ml-auto w-full"
    >
      <motion.div variants={LeftImageAnim} className="flex w-full overflow-x-hidden justify-center md:justify-end md:max-w-[176px] items-center mb-4">
        <Image src={backMoneyImage} alt="money-back" />
      </motion.div>
      <SalesCart
        variants={fadeInLeft}
        className="w-full max-w-[328px] md:max-w-[793px] bg-green flex flex-col justify-center md:justify-start items-center md:items-start gap-y-4"
      >
        <Title className="text-[26px] md:text-[36px] md:text-left text-white tracking-[0.5px] leading-normal">Money-Back Guarantee</Title>
        <Typography className="text-left text-lightGray font-goggleSans font-normal text-[16px] leading-[24px] tracking-[0.25px] md:w-full md:max-w-[665px]">
          We are so confident in our service that we are ready to offer a full refund within 30 days of purchase if you do not achieve initial results
          and can demonstrate you have followed the plan.
        </Typography>
        <Typography className="text-left text-lightGray font-goggleSans font-normal text-[16px] leading-[24px] tracking-[0.25px]">
          Learn more about all the conditions in our{" "}
          <LinkHref className="font-goggleSans font-normal text-[16px] leading-[24px] tracking-[0.25px] text-white" href="/terms">
            Subscription Terms
          </LinkHref>
          .
        </Typography>
      </SalesCart>
    </motion.div>
  );
};
