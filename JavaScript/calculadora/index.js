import { createInterface } from "readline";
import { Soma, Subtracao } from "./operacoesMatematicas.js";

const leitor = createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question("Digite o primeiro Número:\n>", (num1) => {
  leitor.question(
    "Digite a Operação:\n a)soma\n b)subtração \n>",
    (operacao) => {
      leitor.question("Digite o segundo Número:\n>", (num2) => {
        const numero1 = Number(num1);
        const numero2 = Number(num2);

        let resultado = null;

        const operacaoFormatado = operacao.toLowerCase().trim();

        if (operacaoFormatado == "soma" || operacaoFormatado == "a") {
          resultado = Soma(numero1, numero2);
        } else if (
          operacaoFormatado == "subtracao" ||
          operacaoFormatado == "b"
        ) {
          resultado = Subtracao(numero1, numero2);
        } else {
          console.log("Operação Invalida");
        }

        if (resultado !== null) {
          console.log("O resultados da operação é: " + resultado);
        }
        leitor.close();
      });
    },
  );
});
