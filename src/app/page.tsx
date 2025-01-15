/* eslint-disable @next/next/no-img-element */
"use client";
import AntigoCNPJ from "@/Components/antigoCNPJ";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import NovoCNPJ from "@/Components/NovoCNPJ";
import { Layout } from "@/Layout/Layout";
import { CSSProperties, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const [oldCNPJ, setOldCNPJ] = useState(false);
  //59057992001299
  //12ABC34501DE35

  function containsLetters(value: string): boolean {
    console.log(`Valor: ${value} verificando: ${/[a-zA-z]{14}/.test(value)}`);
    return /[a-zA-Z]{14}/.test(value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const inputValue = (form[1] as HTMLInputElement).value;
    console.group("Submit: " + inputValue);
    console.log(containsLetters(inputValue));
    setValue(`${inputValue}`);
    if (containsLetters(inputValue)) {
      setOldCNPJ(false);
      toast.error("O cnpj deve conter números e letras! ❗");
    } else {
      setOldCNPJ(true);
      toast.success("CNPJ enviado com sucesso!");
    }
  };
  
  return (
    <>
      <Toaster position="top-right" />
      <Layout.Structure>
        <Layout.Header />
        <img
          className="w-full bg-cover"
          src="/banner2.png"
          alt="BannerWebsite"
        />
        <Layout.Content>
          <div className="flex flex-col items-center">
            <Layout.Form onSubmit={handleSubmit} className="w-[400px]">
              <h2 className="text-2xl text-center py-2">
                Confira o <strong>CNPJ</strong>!
              </h2>
              <fieldset>
                <Input
                  // onChange={(e) => setValue(e.target.value)}
                  maxLength={14}
                  type="text"
                  // value={value}
                  text={`Digite um CNPJ: `}
                  placeholder="12ABC34501DE35"
                />
              </fieldset>
              <Button type="submit">Enviar</Button>
            </Layout.Form>
            {oldCNPJ === true && (
              <AntigoCNPJ
                inputValue={value}
                setIsValid={setIsValid}
                isValid={isValid}
              />
            )}
            {oldCNPJ === false && (
              <NovoCNPJ
                inputValue={value}
                setIsValid={setIsValid}
                isValid={isValid}
              />
            )}
          </div>
        </Layout.Content>
      </Layout.Structure>
    </>
  );
}
