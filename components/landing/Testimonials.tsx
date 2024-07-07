"use client";

import { ReviewCart } from "../ReviewCart";
import { Title } from "../ui/Title";
import { Typography } from "../ui/Typography";
import { DiscountCart } from "./DiscountCart";
import { reviews } from "@/constants";
import { fadeInDown, fadeInUp, staggerContainer } from "@/constants/variants";
import { motion } from "framer-motion";
import React from "react";

export const Testimonials = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: false, amount: 0.2 }}
      className="mb-14 flex flex-col justify-center items-center"
    >
      <Title variants={fadeInDown} className="text-[30px] md:text-[36px] tracking-[0.25px] mb-8 md:mb-14 text-center">
        What people are saying about us
      </Title>
      <div className="flex lg:grid lg:grid-cols-2 gap-y-8 lg:gap-6 flex-col justify-center lg:justify-start items-center lg:items-start mb-9 md:mb-28 mt-8 md:mt-0">
        <Typography
          variants={fadeInUp}
          className="text-[24px] font-goggleSans font-normal leading-[36px] tracking-[0.25px] text-basic mb-8 w-full text-center lg:text-left m-auto"
        >
          “ The Brytix team gave me the best knowledge to create my investment strategy.”
        </Typography>
        <ReviewCart data={reviews} />
      </div>
      <DiscountCart />
    </motion.section>
  );
};
