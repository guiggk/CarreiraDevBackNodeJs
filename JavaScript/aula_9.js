// Entrada de Dados pelo Terminal

// readline é um módulo do Node.js que fornece uma interface para ler dados de um fluxo de entrada, como o teclado. Ele permite criar uma interface de leitura e escrita para interagir com o usuário por meio do terminal.

const readline = require("readline");

// O método createInterface do módulo readline é usado para criar uma interface de leitura e escrita. Ele recebe um objeto de configuração que especifica as opções de entrada e saída. No exemplo, estamos configurando a entrada para ser o processo de leitura padrão (process.stdin) e a saída para ser o processo de escrita padrão (process.stdout).

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// O método question do objeto de interface de leitura é usado para fazer uma pergunta ao usuário e aguardar a resposta. Ele recebe dois parâmetros: a pergunta a ser exibida e uma função de callback que será chamada quando o usuário fornecer a resposta. A resposta do usuário é passada como argumento para a função de callback.

leitor.question("Qual é o seu nome?\n", (nome) => {
  setTimeout(() => {
    console.log(`Olá, ${nome}`);
  }, 1000);
  setTimeout(() => {
    console.log("Seja muito Bem-vindo ao nosso sistema!\n");
    setTimeout(() => {
      leitor.question("Qual é a sua idade?\n", (idade) => {
        if (idade >= 18) {
          console.log("Você é maior de idade, Você pode tirar o CNH!");
        } else {
          console.log("Você é menor de idade, Você não pode tirar o CNH!");
        }

        leitor.close();
      });
    }, 1000);
  }, 2000);
});
