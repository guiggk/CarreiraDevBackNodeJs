// desafio 14 - Quizz de jAVASCRIPT

console.log("Bem vindo ao Quizz de JavaScript \n");
console.log("Responda com a letra a, b ou c \n");

const readline = require("readline");

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

acertos = 0;

//Nesse desafio, criamos um quizz de JavaScript com 3 perguntas. O usuário deve responder com a letra correspondente à resposta correta. O programa verifica as respostas e conta quantas foram acertadas, fornecendo feedback ao final do quizz.

leitor.question(
  "1) Qual palavra usamos para criar uma função? \n a) function \n b) define \n c) create \n",
  (resposta1) => {
    console.log(`Você respondeu: ${resposta1} \n`);
    console.log("Verificando resposta... \n");
    if (resposta1.toLowerCase() === "a") {
      setTimeout(() => {
        console.log("Resposta correta! \n");
      }, 1000);
      acertos++;
    } else {
      setTimeout(() => {
        console.log(
          "Resposta incorreta! A resposta correta é a letra a) function \n",
        );
      }, 1000);
    }
    setTimeout(() => {
      console.log("Vamos para a próxima pergunta! \n");
    }, 2000);

    setTimeout(() => {
      leitor.question(
        "2) Qual dessas é uma estrutura de repetição? \n a) loopar \n b) repeat \n c) for \n",
        (resposta2) => {
          console.log(`Você respondeu: ${resposta2} \n`);
          console.log("Verificando resposta... \n");
          if (resposta2.toLowerCase() === "c") {
            setTimeout(() => {
              console.log("Resposta correta! \n");
            }, 1000);
            acertos++;
          } else {
            setTimeout(() => {
              console.log(
                "Resposta incorreta! A resposta correta é a letra c) for \n",
              );
            }, 1000);
          }
          setTimeout(() => {
            console.log("Vamos para a próxima pergunta! \n");
          }, 2000);
          setTimeout(() => {
            leitor.question(
              "3) Qual Valor é considerado falsy em JavaScript? \n a) 1 \n b) 0 \n c)'texto' \n",
              (resposta3) => {
                console.log(`Você respondeu: ${resposta3} \n`);
                console.log("Verificando resposta... \n");
                if (resposta3.toLowerCase() === "b") {
                  setTimeout(() => {
                    console.log("Resposta correta! \n");
                  }, 1000);
                  acertos++;
                } else {
                  setTimeout(() => {
                    console.log(
                      "Resposta incorreta! A resposta correta é a letra b) 0 \n",
                    );
                  }, 1000);
                }
                setTimeout(() => {
                  console.log("Finalizando o quizz! \n");

                  if (acertos === 3) {
                    console.log(
                      `INCRIVELLLLL! Você acertou todas as perguntas. \n`,
                    );
                  } else if (acertos === 2) {
                    console.log(
                      `Muito Bem!Você acertou ${acertos} de 3 perguntas. Continue assim! \n`,
                    );
                  } else {
                    console.log(
                      `Você não acertou nenhuma pergunta. Continue Praticando e Estudando! \n`,
                    );
                  }
                }, 2000);

                setTimeout(() => {
                  console.log("Obrigado por participar do nosso quizz! \n");
                  leitor.close();
                }, 3000);
              },
            );
          }, 3000);
        },
      );
    }, 3000);
  },
);
