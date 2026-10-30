import Link from "next/link";
import React from "react";

type Props = {
  variant?: "light" | "dark";
};

function NavBar({ variant = "light" }: Props) {
  const isDark = variant === "dark";

  return (
    <nav className="p-8 flex justify-between items-center ">
      <Link
        href="/"
        className={`text-left md:text-lg font-bold ${
          isDark ? "text-slate-100" : "text-blue-950"
        }`}
      >
        Gaurav Sobti
      </Link>
      <div
        className={`text-sm md:text-base inline-grid grid-cols-3 ml-4 gap-2 md:gap-8 font-medium ${
          isDark ? "text-slate-300" : "text-blue-900"
        }`}
      >
        <Link href="/">Home</Link>
        <Link href="/learn">Learn</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}

export default NavBar;
