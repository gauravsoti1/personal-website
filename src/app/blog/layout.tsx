import React from "react";
import NavBar from "../components/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-tr from-white to-blue-300 min-h-screen">
      <NavBar />
      {children}
    </div>
  );
}
