import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-violet-800">
      <div className="flex justify-between p-5">
        <h2 className="text-2xl">CNPJ Verificator</h2>
        <nav className="flex items-center text-xl uppercase gap-4">
          <Link href={"/sobre"}>Sobre nós</Link>
          <Link href={"/"}>Home</Link>
        </nav>
      </div>
    </header>
  );
}
