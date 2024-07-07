import type { Metadata } from "next";
import "./globals.css";
import { fontOnLocal, manrope, roboto } from "@/components/font";

export const metadata: Metadata = {
  title: "Ucademy",
  description: "Nền tảng học trực tuyến",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${roboto.variable} font-primary`}>
        {children}
      </body>
      {/* <body className={fontOnLocal.className}>{children}</body> */}
    </html>
  );
}
