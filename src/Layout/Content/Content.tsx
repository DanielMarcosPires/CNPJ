import React, { ComponentProps } from "react";

export default function Content({ children }: ComponentProps<"main">) {
  return (
    <main className={`bg-violet-200 text-black border border-blue-500 px-5`}>
      {children}
    </main>
  );
}
