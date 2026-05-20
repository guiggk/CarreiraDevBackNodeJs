//desafio 12 - soma de 1 a 100

console.log("Bem vindo à Soma de 1 a 100 \n");

numero = 1;

soma = 0;

while (numero <= 100) {
  soma += numero;
  numero++;
  console.log(`Número atual: ${numero - 1} | Soma atual: ${soma}`);
}

console.log(`A soma de 1 a 100 é: ${soma}!`);
