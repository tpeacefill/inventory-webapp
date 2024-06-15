import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins_init = Poppins({
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
   variable: "--poppins",
   });

export const metadata: Metadata = {
  title: "Little Stockpile",
  description: "An inventory management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins_init.variable}>{children}</body>
    </html>
  );
}
