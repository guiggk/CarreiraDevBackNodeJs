//desafio 13 - Tabuada

console.log("Bem vindo à Tabuada \n");

numero = 1;

while (numero <= 10) {
  console.log(`Tabuada do ${numero}:`);
  for (i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
  numero++;
}
