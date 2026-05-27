//metodos arrays

const numeros = [1, 2, 3, 4, 5];

const numerosPares = numeros.filter((numero) => {
  return numero % 2 === 0;
});

const numerosImpares = numeros.filter((numero) => {
  return numero % 2 !== 0;
});

console.log(`Lista de todos os números: ${numeros}`);
console.log(`Listados números pares: ${numerosPares}`);
console.log(`Listados números impares: ${numerosImpares}`);

console.log("\nUsando o método map ");

const numerosDobrados = numeros.map((numero) => {
  return numero * 2;
});

console.log(`Lista dos Números dobrados: ${numerosDobrados}`);
