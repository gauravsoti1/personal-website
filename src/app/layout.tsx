import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { BASE_URL } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

const siteDescription =
  "Gaurav Sobti — Senior Fullstack Engineer (React, TypeScript, Node) with 8+ years of experience, from a YC startup's first 100k users to design systems 100+ engineers rely on.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Gaurav Sobti — Senior Fullstack Engineer",
    template: "%s | Gaurav Sobti",
  },
  creator: "Gaurav Sobti",
  description: siteDescription,
  keywords: [
    "Gaurav Sobti",
    "Senior Fullstack Engineer",
    "React developer",
    "TypeScript",
    "Next.js developer",
    "Frontend engineer Melbourne",
  ],
  authors: [{ name: "Gaurav Sobti", url: BASE_URL }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Gaurav Sobti",
    title: "Gaurav Sobti — Senior Fullstack Engineer",
    description: siteDescription,
    images: [
      {
        url: "/myPic.jpg",
        alt: "Gaurav Sobti",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Gaurav Sobti — Senior Fullstack Engineer",
    description: siteDescription,
    images: ["/myPic.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
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
