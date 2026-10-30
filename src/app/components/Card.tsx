import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md focus-within:border-blue-300">
      {children}
    </div>
  );
}
