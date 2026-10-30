import React from "react";
import { JetBrains_Mono } from "next/font/google";
import NavBar from "../components/NavBar";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${jetbrainsMono.variable} min-h-screen bg-gradient-to-b from-blue-50 via-white to-white pb-8`}
    >
      <NavBar />
      {children}
    </div>
  );
}
