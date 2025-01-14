import { Layout } from "@/Layout/Layout";
import React, { FormEvent, useState } from "react";
import Input from "../Input";
import Button from "../Button";

function CNPJ_converter(value: string) {
  const resultado: number[] = [];
  for (const char of value) {
    // Itera diretamente pelos caracteres da string
    const code = char.charCodeAt(0);
    if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90)) {
      // Verifica números e letras maiúsculas
      resultado.push(code - 48);
    } else {
      throw new Error(`Caractere inválido encontrado: '${char}'`);
    }
  }
  return resultado;
}

export function mult(arr: string, weight: number[]) {
  try {
    const res = CNPJ_converter(arr);
    if (res.length !== weight.length) {
      throw new Error(
        "Erro no cálculo: número de dígitos incompatível com os pesos."
      );
    }
    return res.map((value, index) => value * weight[index]);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function soma(arr: number[]) {
  const somaTotal = arr.reduce((acc, value) => acc + value, 0);
  return somaTotal;
}

export function rest(soma: number) {
  const resName = soma % 11;
  return resName < 2 ? 0 : 11 - resName;
}

function calc1(value: string, weight: number[]) {
  console.group("calc1");
  const str1 = value.slice(0, 12).toUpperCase(); // Pega os primeiros 12 dígitos
  const multiply = mult(str1, weight);

  if (multiply.length === 0) return;

  console.log(multiply);

  const sum = soma(multiply);
  const resto1 = rest(sum);
  console.groupEnd();
  return resto1;
}

function calc2(value: string, weight: number[], firstDV: number) {
  console.group("calc2");
  const str2 = value.slice(0, 12).toUpperCase() + firstDV; // 13 posições
  const multiply = mult(str2, weight);

  if (multiply.length === 0) return;

  const sum = soma(multiply);
  const resto2 = rest(sum);

  console.log("str2: " + str2);
  console.log("multiply: " + multiply);

  console.log("sum: " + sum);
  console.log("resto2: " + resto2);

  console.log(`Resto2: ${resto2}`);
  console.groupEnd();
  return resto2;
}


export default function CNPJconversor() {
    const [value, setValue] = useState("");
      const [isValid, setIsValid] = useState<boolean | null>(null);
    
      const weight1: number[] = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
      const weight2: number[] = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    
      const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //console.log(`Valor do input: ${e.target[0].value}`);
    
        const regex = /^[a-zA-Z0-9]{14}$/;
        console.log(regex.test(value));
        if (regex.test(value)) {
          const firstDV = calc1(value, weight1);
          if (firstDV !== null && parseInt(value[12], 10) === firstDV) {
            const secondDV = calc2(value, weight2, firstDV);
            if (secondDV !== null && parseInt(value[13], 10) === secondDV) {
              setIsValid(true);
            } else {
              setIsValid(false);
            }
          } else {
            setIsValid(false);
          }
        } else {
          setIsValid(false);
        }
      };
  return (
    <Layout.Form
      isValid={isValid}
      onSubmit={handleSubmit}
      className="w-[400px]"
    >
      <h2 className="text-2xl text-center py-2">
        Confira o <strong>CNPJ</strong> novo!
      </h2>
      <fieldset>
        <Input
          onChange={(e) => setValue(e.target.value)}
          maxLength={14}
          type="text"
          value={value}
          text={`Digite um CNPJ: `}
          placeholder="12ABC34501DE35"
        />
      </fieldset>
      <Button type="submit">Enviar</Button>
    </Layout.Form>
  );
}
