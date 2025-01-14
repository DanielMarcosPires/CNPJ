import React from "react";

interface InputProps extends React.ComponentProps<"input"> {
  text: string;
}
export default function Input({ text, ...props }: InputProps) {
  return (
    <>
      <label>{text}</label>
      <div className="border border-black rounded-2xl focus-within:bg-black/5 focus-within:placeholder-white transition-all my-2">
        <input className="bg-transparent  outline-none w-full p-4" {...props} />
      </div>
    </>
  );
}
