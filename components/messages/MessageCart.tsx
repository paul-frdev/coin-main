"use client";

import { Question, ShowMessage } from "@/types/quizQuestions";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Button } from '../ui/Button';
import { Title } from '../ui/title';

interface MessageCartProps {
  message: ShowMessage;
  currentQuestionIndex: number;
  currentQuestion: Question;
  toNextQuestion?: (index: number) => void;
}
export const MessageCart: React.FC<MessageCartProps> = ({ message, currentQuestion, currentQuestionIndex, toNextQuestion }) => {
  const handleContinue = () => {
    currentQuestion.showMessage = false;
    toNextQuestion?.(currentQuestionIndex + 1);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          y: 0,
          opacity: 0,
        },
        animate: {
          y: 0,
          opacity: 1,
          transition: { type: "tween", duration: 1, delay: 0.1 },
        },
      }}
      className="w-full max-w-[328px] flex flex-col justify-center items-center gap-y-9 h-full max-h-[500px] py-8 px-6 bg-white rounded-3xl"
    >
      <div className="flex flex-col justify-center items-center gap-y-6">
        {message.id === 7 || message.id === 11 ? <Image src={message.src} alt="image" width={280} height={179} /> : null}
        {message.id === 11 && <Title className="text-lg leading-[24px] tracking-[0.32px] text-basic">{message.title}</Title>}
        <p className="text-[16px] font-sansMedium leading-[24px] tracking-[0.32px] text-left max-w-[280px] w-full">
          {message.subtitle} <span className="text-[#727AED] text-[16px] font-goggleSans font-bold">{message.spanText} </span>
          {message.text}
        </p>
        {message.id === 14 || message.id === 19 ? <Image src={message.src} alt="image" width={280} height={179} /> : null}
      </div>
      <div className="w-full">
        <Button className="w-full max-w-[280px] h-[48px]" onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </motion.div>
  );
};
