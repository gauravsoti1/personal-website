import React from "react";
import NavBar from "../components/NavBar";
import "./blog.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white pb-8">
      <NavBar />
      {children}
    </div>
  );
}
