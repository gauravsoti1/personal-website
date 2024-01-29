import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="p-8 flex justify-between font-bold text-blue-950">
      <a className="text-left">Gaurav Sobti</a>
      <div className="inline-grid grid-cols-3 ml-4 gap-8">
        <Link href="/">Home</Link>
        <Link href="/learn">Learn</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}

export default NavBar;
