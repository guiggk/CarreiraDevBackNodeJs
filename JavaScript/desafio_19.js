// desafio 19 - manipulando objetos com array

const pessoa = {
  nome: "Guilherme",
  idade: 22,
};

const pessoa2 = {
  nome: "Maria",
  idade: 15,
};

const pessoa3 = {
  nome: "João",
  idade: 25,
};

const pessoas = [pessoa, pessoa2, pessoa3];

console.log(pessoas);

const pessoasMaioresDeIdade = pessoas.filter((pessoa) => pessoa.idade >= 18);

console.log(pessoasMaioresDeIdade);
