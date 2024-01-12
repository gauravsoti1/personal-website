import { ReactNode } from "react";

export default function Card({ children }: {children: ReactNode}) {
  return <div className="bg-white p-4 rounded shadow">{children}</div>;
}
