import { cn } from '@/lib/utils';
import "./globals.css";
import type { Metadata } from "next";
import { googleSans } from '@/fonts';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: "Academy",
  description: "Investing app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(`bg-body bg-main antialiased`, googleSans.variable)}>
        <Navbar />
        <main className="h-[calc(100vh-120px)]">{children}</main>
      </body>
    </html>
  );
}
