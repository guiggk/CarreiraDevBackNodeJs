//Destruction

const pessoa = {
  nome: "Nathalia",
  idade: 17,
  profissao: "Estudante",
};

//console.log(pessoa.nome);

//console.log(pessoa.idade);

const { nome, idade } = pessoa;

console.log(nome);
console.log(idade);

function Saudacao({ nome }) {
  console.log(`Olá, ${nome}`);
}

Saudacao(pessoa);

const frutas = ["Uva", "Banana"];

const [primeira, segunda] = frutas;

console.log(`A primeira fruta é ${primeira} e a segunda fruta é ${segunda}`);
