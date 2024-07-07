import localFont from "next/font/local";

export const googleSans = localFont({
  src: [
    {
      path: "./GoogleSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./GoogleSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./GoogleSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lato",
});
