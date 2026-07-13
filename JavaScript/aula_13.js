//objetos

// é uma estrutura que agrupa dados relacionados em formato de pares: chaves e valor

let pessoa = {
  nome: "Guilherme",
  idade: 30,
  temCarteira: false,
};

pessoa.sobrenome = "Soares";
pessoa.idade = 22;

console.log(`Nome: ${pessoa.nome}`);
console.log(`Sobrenome: ${pessoa.sobrenome}`);
console.log(`Nome Completo: ${pessoa.nome} ${pessoa.sobrenome}`);

const livro = {
  titulo: "It - A Coisa",
  autor: "Stephen King",
  paginas: 1138,
};

livro.idiomas = ["Inglês", "Português", "Espanhol"];

livro.idiomas.push("Francês");

console.log(livro); //Exbição do objeto

//obs: se não colocar o JSON.stringify() o console.log() irá exibir [object][object], e não apenas a string JSON legível.
console.log("Livro antes: " + JSON.stringify(livro)); //JSON.stringify() converte o objeto em uma string JSON para exibição legível

delete livro.paginas;

console.log(`Livro depois: ${JSON.stringify(livro)}`);

livro["publicadoEm"] = 1986;

console.log(livro);
