import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon dictionary",
  description: "My Pokemon dictionary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="w-full h-[60px] bg-[#222222] text-center pt-[1rem]">
        <h2 className="text-xl text-white m-auto ">나의 포켓몬 도감</h2>
        </header>
        {children}</body>
    </html>
  );
}
