import React, { ComponentProps } from "react";

export default function Content({ children }: ComponentProps<"main">) {
  return (
    <main className="bg-violet-200 h-full text-black border border-blue-500 px-5 overflow-y-auto">
      {children}
    </main>
  );
}
