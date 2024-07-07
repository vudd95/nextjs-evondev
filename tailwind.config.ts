import type { Config } from "tailwindcss";
import { manrope, roboto } from "@/components/font";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--font-manrope)",
        secondary: "var(--font-roboto)",
      },
    },
  },
  plugins: [],
};
export default config;
