"use client";

import { Title } from "../ui/Title";
import { cn } from "@/lib/utils";
import { Question } from "@/types/quizQuestions";
import { motion } from "framer-motion";
import React from "react";
import { AnswersList } from '../AnswersList';

interface QuizCartProps {
  question: Question | null;
  currentQuestionIndex?: number;
  nextQuestion?: (data: string, answerId: number) => void;
}
export const QuizCart: React.FC<QuizCartProps> = ({ question, nextQuestion, currentQuestionIndex }) => {
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
      className="w-full max-w-[792px] h-[387px] md:h-[431px] bg-quizCart rounded-t-[38px]"
    >
      <div
        className={cn(
          `flex justify-center items-center h-[107px] max-w-[792px] w-full bg-gradient-to-r from-[#727AED] to-[#5A60BA] rounded-t-[38px] mb-6 md:mb-12`,
          currentQuestionIndex === 19 ? "h-[170px] md:h-[130px]" : "h-[107px]"
        )}
      >
        <Title className="text-white transition-all duration-300 max-w-[384px] w-full text-left text-[18px] tracking-[0.27px] leading-[24px] px-4 md:px-0 md:text-[20px] md:tracking-[0.3px] md:leading-[28px]">
          {question?.questionText}
        </Title>
      </div>
      <div>
        <AnswersList answers={question?.answerOptions} nextQuestion={nextQuestion} />
      </div>
    </motion.div>
  );
};
