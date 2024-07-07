"use client";

import { Button } from "../ui/Button";
import { LinkHref } from "../ui/LinkHref";
import { Title } from "../ui/title";
import { Typography } from "../ui/typography";
import { SalesCart } from "./SalesCart";
import { SalesWidget } from "./SalesWidget";
import guarenteeImage from "/public/images/guarentee.png";
import { LeftImageAnim, fadeInLeft, fadeInRight, fadeInUp, rightImageAnim, staggerTextContainer } from "@/constants/variants";
import { useTimer } from "@/hooks/useTimer";
import { LockOrange } from "@/icons/lockOrange";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const DiscountCart = () => {
  const { formattedTime } = useTimer();
  return (
    <motion.div
      variants={staggerTextContainer}
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col justify-center items-center w-full overflow-x-hidden"
    >
      <SalesCart
        variants={fadeInUp}
        className="border-8 border-[#727AED] w-full max-w-[328px] md:max-w-[1200px] relative flex flex-col md:flex-row justify-center gap-y-6 mb-9"
      >
        <motion.span
          initial="hidden"
          whileInView="animate"
          viewport={{ once: false }}
          variants={rightImageAnim}
          className="absolute z-10 top-0 overflow-hidden md:-top-[4px] right-[7px] md:right-[65px] bg-rightCoins md:bg-rightCoinsBig w-[132px] md:w-[149px] h-[178px] md:h-[303px] bg-no-repeat object-center object-cover"
        />
        <div className="flex flex-col md:flex-row justify-start md:justify-center items-start gap-y-6 w-full max-w-[264px] md:max-w-[570px]">
          <motion.div variants={fadeInRight} className="w-full max-w-[280px] m-auto">
            <Title className="text-xl text-left tracking-[0.3px] mb-4">
              7-day trial for <span className="text-orange">50%</span>
            </Title>
            <SalesWidget className="bg-transparent bg-bgBlue flex flex-col justify-center items-center font-goggleSans font-bold tracking-[0.25px] h-[95px]">
              <span className="text-[#B8BCF6] inline text-[28px] line-through -mb-[15px]">$15.99</span>
              <span className="text-[42px] text-white">$7.98</span>
            </SalesWidget>
          </motion.div>
          <motion.div variants={fadeInLeft} className="w-full">
            <Title className="text-xl text-left tracking-[0.3px] mb-4">Discount expires in</Title>
            <SalesWidget className="bg-transparent max-w-[280px] border-8 border-lightOrange  gap-y-3 flex justify-center items-center  h-[95px]">
              <span className="w-[65px]">
                <LockOrange />
              </span>
              <span className="text-[56px] tracking-[0.25px] font-goggleSans font-bold block text-orange">{formattedTime}</span>
            </SalesWidget>
          </motion.div>
        </div>
        <motion.span
          variants={LeftImageAnim}
          className="absolute overflow-hidden -bottom-[42px] md:-bottom-[74px] -left-[5px] md:left-[59px] bg-leftCoins md:bg-leftCoinsBig w-[100px] md:w-[213px] md:h-[286px] md:w-[145px] h-[169px] md:h-[191px]  bg-no-repeat object-center object-cover"
        />
      </SalesCart>
      <motion.div variants={fadeInUp} className="w-full flex justify-center mb-6 md:mb-9">
        <Button
          variant="buttonPrimaryBlueDestructive"
          className="bg-bgGreen hover:bg-hoverGreen border-none max-w-[328px] md:max-w-[264px] w-full flex justify-center items-center h-[48px] text-white uppercase shadow shadow-[rgba(94, 178, 93, 0.50)]"
        >
          TRY NOW
        </Button>
      </motion.div>
      <motion.div variants={fadeInUp} className="w-full max-w-[328px] mb-3">
        <Image src={guarenteeImage} alt="guarentee" />
      </motion.div>
      <motion.div variants={fadeInUp} className="flex justify-center items-center">
        <Typography className="w-full max-w-[792px] text-[14px] font-goggleSans font-normal leading-[18px] tracking-[0.4px] text-darkGray">
          By continuing you agree that if you don’t cancel at least 24 hours prior to the end of the 7-days trial period, you will automatically be
          charged the full price of every 30 days until you cancel in settings. Learn more about cancellation and refund policy in{" "}
          <LinkHref className="font-goggleSans font-normal leading-[18px] tracking-[0.4px] text-grayLinks" href="/terms">
            Subscription Terms.
          </LinkHref>
        </Typography>
      </motion.div>
    </motion.div>
  );
};
