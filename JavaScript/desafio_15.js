//desafio 15 - Adicionando e removendo itens de um array

const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

console.log("Lista de frutas: ");
frutas.forEach((fruta) => {
  console.log(fruta);
});

console.log("\nNova lista de frutas: ");

frutas.push("Abacaxi");

frutas.forEach((fruta) => {
  console.log(fruta);
});

console.log("\nRemovendo a primeira fruta da lista:");

frutas.shift();
frutas.forEach((fruta) => {
  console.log(fruta);
});
