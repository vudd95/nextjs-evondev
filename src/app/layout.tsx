import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/ultis";
import Sidebar from "@/components/layout/Sidebar";

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
      <body className={manrope.className}>
        <div className="wrapper grid grid-cols-[300px_minmax(0,_1fr)] h-screen">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
