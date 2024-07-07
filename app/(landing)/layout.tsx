import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz",
  description: "start your investing journey",
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      {children}
      <Footer />
    </div>
  );
}
