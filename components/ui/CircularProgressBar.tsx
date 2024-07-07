"use client";

import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface CircularProgressBarProps {
  value: number;
}

export const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ value }) => {
  const progress = value > 100 ? 100 : value < 0 ? 0 : value;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      transition={{ duration: 1.5 }}
    >
      <CircularProgress value={progress} color="#ED9F72" trackColor="rgba(237, 159, 114, 0.25)" capIsRound thickness={8} size="196px">
        <CircularProgressLabel className="text-circular font-goggleSans font-bold text-[32px] tracking-[0.5px]">{`${progress}%`}</CircularProgressLabel>
      </CircularProgress>
    </motion.div>
  );
};
