/* eslint-disable @next/next/no-img-element */
"use client";
import Button from "@/Components/Button";
import CNPJconversor from "@/Components/CNPJ/CNPJconversor";
import Input from "@/Components/Input";
import { Layout } from "@/Layout/Layout";

const regex = /\d{14}/;

function CNPJ_antigo(value: string) {
  console.group("CNPJ: " + value);
  const valores = value.split("");
  const weight1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  //const weight2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  //59.057.992/0012-99
  console.log(valores);

  const multiply = valores.map((val, index) => Number(val) * weight1[index]);
  console.log(multiply);

  console.groupEnd();
}

// Testando a função
const exampleCNPJ = "59057992001299";
CNPJ_antigo(exampleCNPJ);

export default function Home() {
  return (
    <Layout.Structure>
      <Layout.Header />
      <img className="w-full bg-cover" src="/banner2.png" alt="BannerWebsite" />
      <Layout.Content>
        <div className="flex justify-around">
          <CNPJconversor />
          <Layout.Form className="w-[400px]">
            <h2 className="text-2xl text-center py-2">[titulo]</h2>
            <fieldset>
              <Input
                maxLength={14}
                type="text"
                text={`Digite um CNPJ: `}
                placeholder="12ABC34501DE35"
              />
            </fieldset>
            <Button type="submit">Enviar</Button>
          </Layout.Form>
        </div>
      </Layout.Content>
    </Layout.Structure>
  );
}
