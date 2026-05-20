//desafio 08 - Conversor de nota em conceito

console.log("Bem vindo ao Conversor de Nota em Conceito \n");

//Realidade 1: Nota A
nota = 9.5;

if (nota >= 9 && nota <= 10) {
  console.log(`A nota ${nota} corresponde ao conceito A!`);
} else if (nota >= 8 && nota < 9) {
  console.log(`A nota ${nota} corresponde ao conceito B!`);
} else if (nota >= 6 && nota <= 7.9) {
  console.log(`A nota ${nota} corresponde ao conceito C!`);
} else if (nota >= 4 && nota <= 5.9) {
  console.log(`A nota ${nota} corresponde ao conceito D!`);
} else {
  console.log(`A nota ${nota} corresponde ao conceito E!`);
}
