import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        primaryBlue: "0px 6px 12px 0px rgba(114, 122, 237, 0.50)",
        primaryOrange: "0px 6px 12px 0px rgba(237, 159, 114, 0.50)",
        light: "0px 6px 12px 0px rgba(0, 0, 0, 0.15)",
      },
      borderColor: {
        basicInput: "rgba(114, 122, 237, 0.25)",
        orange: "rgba(237, 159, 114, 0.75)",
        lightOrange: "rgba(237, 159, 114, 0.25)",
        hoverInput: "rgba(114, 122, 237, 0.50)",
        focusInput: "#727AED",
        errorInput: "#ED7272",
      },
      fontFamily: {
        goggleSans: ["var(--font-lato)"],
      },
      backgroundColor: {
        body: "#F7F7FC",
        quizCart: "#ffffff",
        progress: "rgba(16, 16, 16, 0.15)",
        bgBlue: "#727AED",
        bgGreen: "#5EB25D",
        hoverGreen: "#58A657",
        bgOrange: "#ED9F72",
      },
      colors: {
        gray: "rgba(16, 16, 16, 0.35)",
        progressBg: "rgba(114, 122, 237, 0.25)",
        green: "#5EB25D",
        orange: "#ED9F72",
        lightGray: "rgba(255, 255, 255, 0.75)",
        extraLight: "rgba(255, 255, 255, 0.15)",
        darkGray: "rgba(16, 16, 16, 0.50)",
        grayLinks: "rgba(16, 16, 16, 0.75)",
        count: "rgba(237, 159, 114, 0.75)",
        circular: "rgba(237, 159, 114, 1)",
        basic: "#101010",
        placeholderInput: "rgba(16, 16, 16, 0.25)",
        error: "#ED7272",
        colorTitle: "#727AED",
        checkColor: "rgba(16, 16, 16, 0.75)",
        buttonShadow: "0px 6px 12px 0px rgba(114, 122, 237, 0.50)",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        quiz: "url('/images/backgroundquiz.svg')",
        leftCoins: "url('/images/left-coins.svg')",
        rightCoins: "url('/images/right-coins.svg')",
        leftCoinsBig: "url('/images/coinsLeft.png')",
        rightCoinsBig: "url('/images/coinsRight.png')",
        dollars: "url('/images/dollars.png')",
        dollarsSvg: "url('/images/dollars.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
