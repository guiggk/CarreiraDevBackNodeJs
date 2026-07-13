//desafio 18 - Criando um objeto pessoal

const pessoa = {
  nome: "Guilherme",
  idade: 21,
  profissao: "Desenvolvedor",
};

console.log(pessoa);

pessoa.idade = 22;

pessoa.cidade = "Feira de Santana";

function apresentarPessoa(pessoa) {
  return `Olá, meu Nome é ${pessoa.nome}, tenho ${pessoa.idade} anos, sou de ${pessoa.cidade} e trabalho como ${pessoa.profissao}`;
}

console.log(apresentarPessoa(pessoa));
