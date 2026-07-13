// desafio 20 - objeto com metodo

const usuario = {
  nome: "Guilherme",
  saudacao: function () {
    return console.log(`Olá, meu nome é ${this.nome}!`);
  },
};

usuario.saudacao();
