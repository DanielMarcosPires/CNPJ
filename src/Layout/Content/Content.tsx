import React, { ComponentProps } from "react";

export default function Content({ children }: ComponentProps<"main">) {
  return <main className="border border-blue-500 p-5">{children}</main>;
}
