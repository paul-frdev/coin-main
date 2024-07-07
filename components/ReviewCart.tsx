"use client";

import { SalesCart } from "./landing/SalesCart";
import { StarRating } from "./StarRating";
import { Typography } from "./ui/Typography";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/constants/variants";
import { Review } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface ReviewCartProps {
  data: Review[];
}

export const ReviewCart: React.FC<ReviewCartProps> = ({ data }) => {
  return (
    <>
      {data.map((item: Review) => (
        <SalesCart variants={fadeInUp} key={item.id} className="w-full max-w-[328px] md:max-w-[588px] lg:h-full lg:max-h-[336px] shadow-light">
          <div className="flex flex-col justify-start items-start gap-y-4">
            <div className="flex justify-start items-center gap-x-4">
              <motion.div variants={fadeInRight} className="w-[64px] h-[64px]">
                <Image src={item.src} alt="acatar" width={64} height={64} />
              </motion.div>
              <motion.div variants={fadeInLeft}>
                <Typography className="text-basic text-[16px] tracking-[0.1px] leading-[24px] font-goggleSans font-bold">{item.name}</Typography>
                <StarRating totalStars={item.rating} />
              </motion.div>
            </div>
            <div>
              <Typography className="text-grayLinks font-goggleSans font-normal text-[16px] leading-[24px] tracking-[0.25px] text-left">{item.text}</Typography>
            </div>
          </div>
        </SalesCart>
      ))}
    </>
  );
};
