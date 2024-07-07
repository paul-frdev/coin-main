"use client";

import { StarIcon } from "@/icons/StarIcon";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  totalStars?: number;
}

export const StarRating: React.FC<RatingProps> = ({ totalStars = 5 }) => {
  const createArray = (length: number) => [...Array(length)];
  return (
    <div className="flex justify-start items-center">
      {createArray(totalStars).map((_number: undefined, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  );
};
