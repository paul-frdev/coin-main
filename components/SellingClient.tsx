"use client";

import { GetAcademy } from "./landing/GetAcademy";
import { ProfileResults } from "./landing/ProfileResults";
import { Testimonials } from "./landing/Testimonials";
import { TryAcademy } from "./landing/TryAcademy";
import { Container } from "./ui/Container";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const SellingClient = () => {
  const router = useRouter();

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollY >= totalHeight) {
      setTimeout(() => {
        router.push("/selling-page/discount");
      }, 2000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Container>
        <ProfileResults />
        <TryAcademy />
        <GetAcademy />
        <Testimonials />
      </Container>
    </>
  );
};
