"use client";

import startquizImage from "../../public/images/startquiz.png";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { LinkHref } from "../ui/LinkHref";
import { Subtitle } from "../ui/Subtitle";
import { Typography } from "../ui/Typography";
import { fadeIn, imageZoom, staggerTextContainer } from "@/constants/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const StartQuizClient = () => {
  const route = useRouter();

  return (
    <section>
      <Container className="flex justify-center items-center h-full">
        <motion.div variants={staggerTextContainer} initial="initial" whileInView={"animate"} viewport={{ once: false, amount: 0.1 }}>
          <motion.h1
            variants={fadeIn}
            className="font-body scroll-m-20 text-[26px] text-center md:text-[32px] text-[#101010] font-goggleSans font-bold tracking-[0.5px] transition-colors mb-2"
          >
            Investment income know-how for beginners
          </motion.h1>
          <Subtitle className="w-full max-w-[220px] text-center md:max-w-full m-auto">Take the 5 min quiz to see if you can do it too</Subtitle>
          <motion.div
            variants={imageZoom}
            initial="initial"
            whileInView={"animate"}
            whileHover="hover"
            className="h-full w-full flex justify-center items-center mb-8 mt-8"
          >
            <Image objectFit="contain" src={startquizImage} alt="start-quiz" className="w-full max-w-[384px] h-full max-h-[297.692px]" />
          </motion.div>
          <div className="flex flex-col justify-center items-center">
            <motion.div variants={fadeIn} className="w-full flex flex-col justify-center items-center">
              <Button onClick={() => route.push("/quiz")} className="max-w-[264px] w-full h-[48px] mb-6 uppercase" variant="buttonPrimaryBlue">
                Take the quiz
              </Button>
            </motion.div>
            <Typography variants={fadeIn} className="text-[rgba(16, 16, 16, 0.75)] text-sm tracking-[0.4px] leading-[18px] mb-1">
              By clicking Take the quiz, you agree with
            </Typography>
            <motion.div variants={fadeIn} className="flex justify-center items-center gap-x-1 mb-9">
              <LinkHref href="/terms">Terms, </LinkHref>
              <LinkHref href="/privacy">Privacy, </LinkHref>
              <LinkHref href="/subscription-terms">Subscription Terms</LinkHref>
            </motion.div>
          </div>
          <div className="flex justify-center items-center">
            <Typography variants={fadeIn}>
              Capital, as an investment learning platform, does not provide any investment or financial advice. You should acknowledge there is a risk
              of capital loss and income is not guaranteed and will depend on various factors. Your decision to make an investment should be made at
              your own discretion and upon their own will only. After a weekly trial of ten dollars, a monthly subscription will be applied in the
              amount of twenty-nine dollars and ninety-nine cents unless you decide to unsubscribe.
            </Typography>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
