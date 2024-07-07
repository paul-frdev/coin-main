"use client";

import { Button } from "./Button";
import useAnswerStore from "@/hooks/useAnswerStore";
import { cn } from "@/lib/utils";
import React from "react";

interface QuestionButtonProps {
  answer: string;
  id: number;
  nextQuestion?: (data: string, answerId: number) => void;
}
export const AnswerButton: React.FC<QuestionButtonProps> = ({ answer, id, nextQuestion }) => {
  const { answers } = useAnswerStore();

  const answerTitle = answers.find(item => item.text === answer);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const eventTarget = event.target as HTMLDivElement;
    nextQuestion?.(eventTarget.innerText, id);
  };

  const firstLetterToUpperCase = (str: string) => {
    return str.charAt(0).toUpperCase() + answer.slice(1);
  };

  return (
    <div className="w-full max-w-[384px] h-full max-h-[48px] rounded-lg mb-3 px-4 md:px-0">
      <Button
        onClick={handleClick}
        variant={"buttonPrimaryBlueDestructive"}
        className={cn(
          `justify-start w-full h-[48px] text-left rounded-lg text-[16px] tracking-[0.32px] leading-[24px] px-6`,
          answerTitle ? "bg-[#727AED] text-white opacity-80 pointer-events-none" : "bg-transparent"
        )}
      >
        {firstLetterToUpperCase(answer)}
      </Button>
    </div>
  );
};
