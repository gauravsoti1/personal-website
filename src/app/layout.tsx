import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaurav Sobti",
  creator: "Gaurav Sobti",
  description:
    "A portfolio website for Gaurav Sobti. Full-stack(fronten focused) software developer",
  other: {
    "google-site-verification": "cO8LHiiBWJi0DFfpFBnx2lC_RJZdfWptGP5_c7-l9Fc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
