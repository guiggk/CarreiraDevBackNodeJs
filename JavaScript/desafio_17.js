// desafio 17 - Sistema de Media de Notas

console.log("Bem-vindo ao sistema de média de notas!");

const readline = require("readline");

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const notas = [];

leitor.question("\nDigite a primeira nota:", (nota1) => {
  notas.push(parseFloat(nota1));

  leitor.question("Digite a segunda nota:", (nota2) => {
    notas.push(parseFloat(nota2));
    leitor.question("Digite a terceira nota:", (nota3) => {
      notas.push(parseFloat(nota3));
      leitor.question("Digite a quarta nota:", (nota4) => {
        notas.push(parseFloat(nota4));
        console.log("");
        notas.forEach((nota, index) => {
          console.log(`Sua ${index + 1}° nota é: ${nota}`);
        });

        const media =
          (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

        setTimeout(() => {
          console.log("\nCalculando a média...");
        }, 1000);

        setTimeout(() => {
          if (media >= 7) {
            console.log("\nParabéns, você foi aprovado!");
          } else {
            console.log("\nInfelizmente, você foi reprovado!");
          }
          console.log(`Sua média é: ${media.toFixed(2)}`);
          notas.splice(0);
          console.log(notas);
          leitor.close();
        }, 2000);
      });
    });
  });
});
