"use client";

import { Container } from "./ui/Container";
import { LinkHref } from "./ui/LinkHref";
import { Typography } from "./ui/Typography";
import { fadeInLeft, fadeInRight, staggerTextContainer } from "@/constants/variants";
import { motion } from "framer-motion";
import React from "react";

export const Footer = () => {
  return (
    <motion.footer variants={staggerTextContainer} className="bg-white h-[72px]">
      <Container className="flex justify-between items-center h-full">
        <Typography variants={fadeInRight} className="text-darkGray w-auto">
          Academy@{new Date().getFullYear()}
        </Typography>
        <motion.p variants={fadeInLeft}>
          <LinkHref className="block text-darkGray" href="mailto:support@academy.io">
            support@brytix.io
          </LinkHref>
        </motion.p>
      </Container>
    </motion.footer>
  );
};
