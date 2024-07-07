"use client";

import { Button } from "../ui/Button";
import { Progress } from "../ui/Progress";
import { Typography } from "../ui/Typography";
import { ArrowBackward } from "@/icons/arrowBackward";
import React from "react";

interface QuizNavProps {
  index: number;
  countPoints?: number;
  secondPoints?: number;
  disabled?: boolean;
  prevQuestion?: () => void;
}
export const QuizNav: React.FC<QuizNavProps> = ({ index, countPoints, secondPoints, disabled, prevQuestion }) => {
  return (
    <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-4 w-full max-w-[792px] px-2">
      <div className="row-start-1 row-end-2">
        <Button
          onClick={prevQuestion}
          disabled={disabled}
          className="max-w-[78px] hover:bg-transparent h-[42px] p-1 text-sm uppercase flex justify-between gap-x-2 items-center border-none rounded-md transition-colors duration-300 ease-in-out group"
          variant="buttonPrimaryBlueDestructive"
        >
          <ArrowBackward className="text-darkGray group-hover:text-count transition-colors duration-300 ease-in-out" />
          <span className="text-darkGray group-hover:text-count transition-colors duration-300 ease-in-out">Back</span>
        </Button>
      </div>
      <div className="flex justify-center gap-x-4 w-full max-w-[792px] row-start-2 md:row-start-1 col-start-1 col-end-6 md:col-start-2 md:col-end-4">
        <div className="flex gap-y-[6px] w-full flex-col justify-end md:justify-start items-end md:items-start">
          <Typography className="text-[#101010] w-full max-w-[140px] md:max-w-full text-[16px] leading-[24px] tracking-[0.1px] font-goggleSans font-bold text-left">
            About you
          </Typography>
          <Progress className="bg-progress w-full max-w-[140px]" value={countPoints} />
        </div>
        <div className="flex flex-col  w-full justify-end md:justify-start items-start gap-y-[6px]">
          <Typography className="text-[#101010] text-base leading-[24px] tracking-[0.1px] font-goggleSans font-bold text-left">Personalization</Typography>
          <Progress className="bg-progress w-full max-w-[230px]" value={secondPoints} />
        </div>
      </div>
      <p className="col-start-4 col-end-4 text-right text-count font-goggleSans font-bold">{index + 1}/20</p>
    </div>
  );
};
