import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "our privacy policy",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      {children}
      <Footer />
    </div>
  );
}
