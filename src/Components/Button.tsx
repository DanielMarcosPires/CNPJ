import React, { ComponentProps } from "react";

export default function Button({
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      className="border border-black px-4  py-2 rounded-lg hover:bg-black/5 transition-all"
      {...props}
    >
      {children}
    </button>
  );
}
