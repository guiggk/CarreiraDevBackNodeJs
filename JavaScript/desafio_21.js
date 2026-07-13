// desafio 21 - objeto com o for in

const pessoa = {
  nome: "Guilherme",
  idade: 22,
  profissao: "Desenvolvedor",
  cidade: "Feira de Santana",
};

for (const value in pessoa) {
  console.log(`${value}: ${pessoa[value]}`);
}
