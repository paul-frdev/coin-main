"use client";

import { DiscountCart } from "./landing/DiscountCart";
import { Title } from "./ui/title";
import saleImage from "/public/images/sale.png";
import { fadeInRight, staggerBlockContainer } from "@/constants/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const DiscountClient = () => {
  return (
    <motion.section
      variants={staggerBlockContainer}
      initial="initial"
      animate="animate"
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-col justify-center items-center px-4"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-y-6 mb-6 md:mb-24">
        <Title variants={fadeInRight} className="text-[30px] md:text-[36px] w-full md:max-w-[588px] tracking-[0.25px]">
          Start learning to grow wealth with the <span className="text-colorTitle">Best Offer</span>
        </Title>
        <motion.div
          variants={{
            initial: { x: 100, opacity: 0 },
            animate: {
              x: 0,
              opacity: 1,
              transition: { type: "spring", duration: 3, stiffness: 100, damping: 10, delay: 0.3 },
            },
          }}
          initial="initial"
          animate="animate"
          className="flex justify-center items-center"
        >
          <Image src={saleImage} alt="sale" />
        </motion.div>
      </div>
      <div className="mb-16 w-full">
        <DiscountCart />
      </div>
    </motion.section>
  );
};
