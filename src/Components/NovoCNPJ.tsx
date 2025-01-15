import { Dispatch, SetStateAction } from "react";

function conversor_ASCII(value: string) {
  const resultado: number[] = [];
  for (const char of value) {
    const code = char.charCodeAt(0);
    if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90)) {
      resultado.push(code - 48);
    } else {
      throw new Error(`Caractere inválido encontrado: '${char}'`);
    }
  }
  return resultado;
}

function mult(arr: string, weight: number[]) {
  try {
    const res = conversor_ASCII(arr);
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

interface NovoCNPJProps {
  inputValue: string;
  setIsValid: Dispatch<SetStateAction<boolean>>;
  isValid: boolean;
}

export default function NovoCNPJ({
  inputValue,
  setIsValid,
  isValid,
}: NovoCNPJProps) {
  const weight1: number[] = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const weight2: number[] = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  console.log(inputValue);
  const firstDV = calc1(inputValue, weight1);
  if (firstDV !== null && parseInt(inputValue[12], 10) === firstDV) {
    const secondDV = calc2(inputValue, weight2, firstDV);
    if (secondDV !== null && parseInt(inputValue[13], 10) === secondDV) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  } else {
    setIsValid(false);
  }

  return (
    <div className="text-center ">
      {isValid === true && (
        <p className="inline-block px-4 py-2 text-lg text-green-700 font-bold bg-black/25 rounded-xl">
          CNPJ válido!
        </p>
      )}
      {isValid === false && (
        <p className="inline-block px-4 py-2 text-lg text-red-700 font-bold bg-black/25 rounded-xl">
          CNPJ inválido!
        </p>
      )}
    </div>
  );
}
