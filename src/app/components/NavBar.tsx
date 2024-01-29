import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="p-8 flex justify-between items-center ">
      <Link href="/" className="text-left text-blue-950 md:text-lg font-bold">
        Gaurav Sobti
      </Link>
      <div className="text-sm md:text-base inline-grid grid-cols-3 ml-4 gap-2 md:gap-8 text-blue-900 font-medium">
        <Link href="/">Home</Link>
        <Link href="/learn">Learn</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}

export default NavBar;
