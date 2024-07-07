"use client";

import { Title } from "../ui/title";
import { SalesCart } from "./SalesCart";
import { LeftImageAnim, fadeIn, fadeInLeft, fadeInRight, fadeInUp, rightImageAnim, staggerContainer } from "@/constants/variants";
import { motion } from "framer-motion";
import React from "react";

export const GetAcademy = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col justify-center items-center mb-16 md:mb-28 overflow-y-hidden"
    >
      <Title variants={fadeIn} className="text-[30px] md:text-[36px] tracking-[0.25px] mb-8 md:mb-14">
        What you get Academy
      </Title>
      <div className="flex flex-col justify-center lg:justify-between items-center lg:items-start lg:grid lg:grid-cols-2 lg:h-[500px] lg:gap-x-6 w-full">
        <SalesCart
          variants={fadeInRight}
          className=" bg-bgBlue max-w-[328px] md:max-w-[588px] md:max-h-[454px] md:h-full md:row-start-1 md:row-end-3 w-full flex flex-col justify-center items-center gap-y-6 relative mb-24 lg:mb-0 lg:my-auto md:rounded-[48px] md:justify-start md:items-start"
        >
          <div className="flex flex-col justify-center items-center md:items-start relative">
            <Title className="text-[26px] md:text-[32px] md:mb-6 md:text-left tracking-[0.5px] text-white">
              Investment income
              <br /> know-how
            </Title>
            <motion.span
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: false, amount: 0.1 }}
              variants={LeftImageAnim}
              className="absolute -top-[13px]  left-0 text-[212.178px] lg:text-[369.347px] font-goggleSans font-bold tracking-[1.473px] leading-none text-extraLight"
            >
              1
            </motion.span>
            <div className="flex flex-col justify-center items-center gap-y-4 w-full">
              <p className="w-full text-left text-[16px] text-lightGray tracking-[0.25px] leading-[24px] font-goggleSans font-normal">
                Gain profit from trades with stocks
              </p>
              <p className=" md:w-full text-left text-[16px] text-lightGray tracking-[0.25px] leading-[24px] font-goggleSans font-normal">
                and cryptocurrencies in our investment simulator
              </p>
            </div>
          </div>
          <motion.span
            variants={fadeInUp}
            className="absolute bottom-[-82px] md:-bottom-[53px] lg:-bottom-[80px] right-0 lg:-right-[42px] bg-dollarsSvg lg:bg-dollars max-w-[220px] h-full max-h-[109px] w-full lg:max-w-[458px] lg:h-full lg:max-h-[288px] object-cover object-center bg-no-repeat"
          />
        </SalesCart>
        <SalesCart
          variants={fadeInLeft}
          className=" bg-bgOrange max-w-[328px] md:max-w-[588px] w-full flex flex-col justify-center items-center gap-y-6 relative mb-6 md:rounded-[48px] md:px-10 md:py-14"
        >
          <div className="flex flex-col justify-center items-center md:items-start relative">
            <Title className="text-[26px]  md:text-[30px] md:mb-6 md:text-left tracking-[0.5px] text-white mb-6">Major investment principles</Title>
            <motion.span
              initial="hidden"
              whileInView="animate"
              viewport={{ once: false }}
              variants={rightImageAnim}
              className="absolute -top-[13px] md:-top-[36px] right-0 text-[212.178px] font-goggleSans font-bold tracking-[1.473px] leading-none text-extraLight"
            >
              2
            </motion.span>
            <div className="flex flex-col justify-center items-center gap-y-4 w-full">
              <p className="w-full text-left text-[16px] text-lightGray tracking-[0.25px] leading-[24px] font-goggleSans font-normal">
                Pick up well-known investment principles of the richest and most successful investors
              </p>
            </div>
          </div>
        </SalesCart>
        <SalesCart
          variants={fadeInLeft}
          className=" bg-bgGreen max-w-[328px] md:max-w-[588px] w-full flex md:row-start-2 md:col-start-2 flex-col justify-center items-center gap-y-6 relative md:rounded-[48px] md:px-10 md:py-14"
        >
          <div className="flex flex-col justify-center items-center md:items-start relative">
            <Title className="text-[26px]  md:text-[30px] md:mb-6 md:text-left tracking-[0.5px] text-white mb-6">Chat with your coach</Title>
            <motion.span
              initial="hidden"
              whileInView="animate"
              viewport={{ once: false }}
              variants={rightImageAnim}
              className="absolute -top-[31px] right-0 text-[212.178px] font-goggleSans font-bold tracking-[1.473px] leading-none text-extraLight"
            >
              3
            </motion.span>
            <div className="flex flex-col justify-center items-center gap-y-4 w-full">
              <p className="w-full text-left text-[16px] text-lightGray tracking-[0.25px] leading-[24px] font-goggleSans font-normal">
                Get all answers and reduce mistakes using 24/7 chat with your personal coach
              </p>
            </div>
          </div>
        </SalesCart>
      </div>
    </motion.section>
  );
};
