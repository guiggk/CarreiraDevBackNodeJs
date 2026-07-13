// spread e Rest

let joao1 = {
  nome: "João",
  idade: 21,
  cidade: "São Paulo",
};

// Spread

const joao2 = { ...joao1 }; // aqui estamos usando o spread para criar um novo objeto joao2 com as mesmas propriedades de joao1. O objeto original joao1 não é alterado, pois o spread cria um novo objeto.

joao2.idade = 22;

console.log(joao1);
console.log(joao2);

joao1 = { ...joao1, idade: 50, cidade: "Feira de Santana" }; // aqui estamos usando o spread para criar um novo objeto com as mesmas propriedades de joao1, mas com a propriedade idade atualizada para 50 e a propriedade cidade atualizada para "Feira de Santana". O objeto original joao1 não é alterado, pois o spread cria um novo objeto.

console.log(joao1); // joao1 agora tem as propriedades atualizadas, mas o objeto original não foi alterado

//Rest

const { nome, ...resto } = joao1; // aqui estamos usando o rest para extrair a propriedade nome de joao1 e armazená-la na variável nome, enquanto o resto das propriedades são armazenadas no objeto resto

console.log(nome); // nome é a propriedade nome de joao1
console.log(resto); // resto é um objeto com as propriedades restantes de joao1

console.log(joao1); // joao1 continua o mesmo, pois o rest não altera o objeto original
