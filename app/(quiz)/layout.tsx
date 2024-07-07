import { Navbar } from '@/components/Navbar';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz",
  description: "start your investing journey",
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
