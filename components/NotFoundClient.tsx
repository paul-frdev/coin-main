"use client";

import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Title } from "./ui/Title";
import { Typography } from "./ui/Typography";
import { NotFound } from "@/icons/notFound";
import { useRouter } from "next/navigation";
import React from "react";

export const NotFoundClient = () => {
  const router = useRouter();

  return (
    <Container className="flex flex-col justify-center items-center h-full">
      <div className=" mb-9 md:mb-14">
        <NotFound />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-4 mb-9">
        <Title className="text-center text-[26px] md:text-[32px] tracking-[0.5px]">Ooops! Page not found!</Title>
        <Typography className="text-center text-[16px] tracking-[0.15px] leading-6 font-goggleSans font-normal text-checkColor">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>
      </div>
      <Button
        onClick={() => router.push("/")}
        className="w-full max-w-[328px] md:max-w-[264px] uppercase font-goggleSans font-normal tracking-[1px] leading-[16px]"
      >
        To main page
      </Button>
    </Container>
  );
};
