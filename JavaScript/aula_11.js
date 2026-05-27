// Manipulando arrays

const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

// percorrendo o array com for tradicional
console.log("Percorrendo o array com for tradicional:");
for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta ${i}: ${frutas[i]}`);
}

// percorrendo o array com forEach
console.log("\nPercorrendo o array com forEach:");
frutas.forEach((frutas, indice) => {
  console.log(`Fruta ${indice}: ${frutas}`);
});

// percorrendo o array com for...of
console.log("\nPercorrendo o array com for...of:");
for (const fruta of frutas) {
  console.log(`Fruta: ${fruta}`);
}
