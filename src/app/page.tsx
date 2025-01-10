import Input from "@/Components/Input";
import { Layout } from "@/Layout/Layout";


function calcularDV(cnpj:string) {
  // Função para obter o valor ASCII e subtrair 48
  function getAsciiValue(char:string) {
    const asciiValue = char.charCodeAt(0);
    return asciiValue - 48; // Subtrai 48 para números e letras
  }

  // Atribui os valores dos caracteres
  const valores = Array.from(cnpj.replace(/[^A-Za-z0-9]/g, '')) // Remove qualquer caractere não alfanumérico
    .map((char) => {
      if (/[A-Za-z]/.test(char)) {
        return getAsciiValue(char);
      } else {
        return parseInt(char); // Para números, mantemos o valor original
      }
    });

  // Função para calcular o dígito verificador
  function calcularDigitoVerificador(valores:number, pesos:number) {
    const soma = valores.reduce((acc, valor, i) => acc + valor * pesos[i], 0);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  }

  // Pesos para os cálculos
  const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  // Calcula os dois dígitos verificadores
  const primeiroDV = calcularDigitoVerificador(valores, pesos1);
  valores.push(primeiroDV); // Adiciona o 1º DV para calcular o 2º
  const segundoDV = calcularDigitoVerificador(valores, pesos2);

  return `${cnpj}-${primeiroDV}${segundoDV}`;
}

// Exemplo de uso
const cnpjAlfanumerico = '12.ABC.345/01DE';
const cnpjComDV = calcularDV(cnpjAlfanumerico);

console.log(`CNPJ alfanumérico com dígitos verificadores: ${cnpjComDV}`);


export default function Home() {
  return (
    <Layout.Structure>
      <Layout.Header/>
      <Layout.Content>
          <Layout.Form className="w-[400px]">
            <Input type="text" text="CNPJ:" placeholder="Insira o CNPJ"/>
          </Layout.Form>
      </Layout.Content>
    </Layout.Structure>
  );
}
