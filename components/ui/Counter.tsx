"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CounterProps {
  targetNumber: number;
}

export const Counter: React.FC<CounterProps> = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < targetNumber) {
        setCount(prevCount => prevCount + 1);
      } else {
        return;
      }
    }, 400);

    return () => clearInterval(interval);
  }, [targetNumber, count]);

  useEffect(() => {
    setCount(0);
  }, [targetNumber]);

  return (
    <motion.span key={count} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
      {count}
    </motion.span>
  );
};
