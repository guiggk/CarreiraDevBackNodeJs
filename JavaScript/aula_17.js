// usando Spreads e Rest com Arrays

const frutas = ["maçã", "banana", "laranja"];

const maisFrutas = ["pera", "uva", "abacaxi"];

const clone = [...frutas];

const todasFrutas = [...frutas, ...maisFrutas];

frutas.push("pitanga");

console.log(frutas);
console.log(maisFrutas);
console.log(clone);
console.log(todasFrutas);

const [primeira, segunda, ...restante] = todasFrutas;

console.log(primeira);
console.log(segunda);
console.log(restante);
