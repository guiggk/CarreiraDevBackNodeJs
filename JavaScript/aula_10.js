//arrays

// array são uma lista de valores, guardadas em uma variavel, e cada valor tem um indice, que começa do 0.

let advogados = new Array("Jose Netto", "Fellipe", "Marcelo", "Evellyn");

//outra forma de criar uma array

let advogadosEstagiarios = ["Halina"];

console.log(advogados);
console.log(advogadosEstagiarios);

//acessando um valor do array

console.log(`O primeiro advogado é: ${advogados[0]}`);

//total de itens do array

console.log(`O total de Advogados é: ${advogados.length}`);

//adicionando um valor no array

advogados.push("Halina");
console.log(advogados);

//removendo um valor do array

advogados.pop(); //remove o ultimo valor do array
console.log(advogados);

//removendo um valor do array em um indice específico
console.log(`Removendo o advogado do indice 1: ${advogados[1]}`);
advogados.splice(1, 1); //remove o valor do indice 1, e o segundo parametro é a quantidade de itens a serem removidos;
console.log(advogados);
