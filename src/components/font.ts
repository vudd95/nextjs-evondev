import { Manrope, Roboto } from "next/font/google";
import localFont from "next/font/local";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const fontOnLocal = localFont({
  src: "../app/Chalkduster.ttf",
  display: "swap",
});

export { manrope, roboto, fontOnLocal };
