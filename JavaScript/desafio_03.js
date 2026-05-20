// Desafio 03 - Verificador Situacional do Aluno

console.log("Bem vindo ao Verificador Situacional do Aluno \n");

//Realidade 1: Aluno aprovado
nota1 = 7.5;
nota2 = 8.0;

media = (nota1 + nota2) / 2;

if (media >= 7) {
  console.log(`Sua média é ${media.toFixed(2)}`);
  console.log("Você está aprovado!");
} else {
  console.log(`Sua média é menor que 7, você está reprovado!`);
}

//Realidade 2: Aluno reprovado
nota1 = 2.5;
nota2 = 4.0;

media = (nota1 + nota2) / 2;

if (media >= 7) {
  console.log(`Sua média é ${media.toFixed(2)}`);
  console.log("Você está aprovado!");
} else {
  console.log(`Sua média é menor que 7, você está reprovado!`);
}
