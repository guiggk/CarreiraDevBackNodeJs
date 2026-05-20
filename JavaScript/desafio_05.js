// Desafio 05 - Verificador de idade para compra de bebida alcoólica

console.log(
  "Bem vindo ao Verificador de Idade para Compra de Bebida Alcoólica \n",
);

//Realidade 1: Idade suficiente para comprar bebida alcoólica

idade = 18;

if (idade >= 18) {
  console.log(`Você tem ${idade} anos, pode comprar bebida alcoólica!`);
} else {
  console.log(`Você tem ${idade} anos, não pode comprar bebida alcoólica!`);
}

//Realidade 2: Idade insuficiente para comprar bebida alcoólica

idade = 16;

if (idade >= 18) {
  console.log(`Você tem ${idade} anos, pode comprar bebida alcoólica!`);
} else {
  console.log(`Você tem ${idade} anos, não pode comprar bebida alcoólica!`);
}
