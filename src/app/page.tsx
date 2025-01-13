"use client";
import Input from "@/Components/Input";
import { Layout } from "@/Layout/Layout";
import { useState } from "react";


function CNPJ_converter(value: string) {
  const caracter = value.split(""); // Converte string em Array!
  const resultado: number[] = [];
  caracter.forEach((char) => {
    const code = char.charCodeAt(0);
    let valueConvertido;
    if (code >= 65 && code <= 90) {
      valueConvertido = code - 48;
    } else if (code >= 48 && code <= 50) {
      valueConvertido = code - 48;
    } else {
      valueConvertido = 0;
    }
    resultado.push(valueConvertido);
  });
  return resultado;
}

function mult(arr: string, weight: number[]) {
  const res = CNPJ_converter(arr);
  res.map((value, index) => {
    return value * weight[index];
  });
  return res;
}

function soma(arr: number[]) {
  const somaTotal = arr.reduce((acc, value) => acc + value, 0);
  return somaTotal;
}

function rest(soma: number) {
  const resName = soma % 11;
  return resName < 2 ? 0 : 11 - resName;
}

function calc1(str1: string, peso1: number[]) {
  const multi = mult(str1, peso1);
  const som = soma(multi);
  const resto = rest(som);
  return resto; 
}
function calc2(str2: string, peso2: number[]) {
  const multi = mult(str2, peso2);
  const som = soma(multi);
  const resto = rest(som);
  return resto; 
}

export default function Home() {
  const [value, setValue] = useState("");

  const [calculo1, setCalculo1] = useState();
  const [calculo2, setCalculo2] = useState();

  const str1 = value.slice(0, 12).toUpperCase();
  const str2 = value.slice(0, 13).toUpperCase();
  
  const peso1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const peso2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  
  calc1(str1, peso1);
  calc2(str2, peso2);

  return (
    <Layout.Structure>
      <Layout.Header />
      <Layout.Content>
        <Layout.Form className="w-[400px]">
          <Input
            onChange={(e) => setValue(e.target.value)}
            minLength={13}
            maxLength={14}
            type="text"
            text="Digite um CNPJ:"
            placeholder="Digite um CNPJ"
          />
        </Layout.Form>
        <>{value}</>
      </Layout.Content>
    </Layout.Structure>
  );
}
