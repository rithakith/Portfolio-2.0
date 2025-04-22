import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import GlobalSparkles from "./components/GlobalSparkles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rithara Kithmanthie",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<html lang="en" className="scroll-smooth">
<body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Navbar />
        <GlobalSparkles />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
