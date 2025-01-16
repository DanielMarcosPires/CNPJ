import React, { ComponentProps, CSSProperties } from "react";

interface BannerProps extends ComponentProps<"div">{
  url:string;
}
export default function Banner({url, children}:BannerProps) {

  const imageStyle: CSSProperties = {
    backgroundImage: `url(${url})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundPositionY: "-250px",
    width: "100%",
    height: "400px",
  };

  return (
    <section
      className="flex justify-center items-center bg-black object-cover"
      style={imageStyle}
    >
      <div className="bg-black/50 p-2 rounded-xl text-center w-2/4">
        <h2 className="text-4xl">Valide o seu CNPJ</h2>
        <p className="text-lg">
          Digite o número do <strong>CNPJ</strong> que deseja validar no campo abaixo e descubra
          se ele está ativo e regular na <strong>Receita Federal.</strong> Esse processo é
          rápido, simples e garante maior segurança nas suas transações
          comerciais.
        </p>
        {children}
      </div>
    </section>
  );
}
