import { Dispatch, SetStateAction } from "react";
import { rest, soma } from "./NovoCNPJ";

interface NovoCNPJProps {
  inputValue: string;
  setIsValid: Dispatch<SetStateAction<boolean>>;
  isValid: boolean;
}

export default function AntigoCNPJ({
  inputValue,
  setIsValid,
  isValid,
}: NovoCNPJProps) {
  const string = inputValue.split("");
  const valores = string.map(Number);

  const weight1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const weight2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  //590579920001299

  function mult(valores: number[], weight: number[]) {
    const resultado = valores.map((val, i) => val * weight[i]);
    return resultado;
  }

  function calc1() {
    const multiply = mult(valores.slice(0, 12), weight1);
    const sum = soma(multiply);
    const resto1 = rest(sum);

    return resto1;
  }

  function calc2(firstDV: number) {
    const arrayValores = [...valores.slice(0, 12), firstDV];
    const multiply = mult(arrayValores, weight2);
    const sum = soma(multiply);
    const resto2 = rest(sum);

    return resto2;
  }

  const firstDV = calc1();
  if (firstDV !== null && parseInt(inputValue[12], 10) === firstDV) {
    const secondDV = calc2(firstDV);
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
