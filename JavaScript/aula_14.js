//metodos de objetos
const pessoa = {
  nome: "Guilherme",
  idade: 30,
  pets: ["otis"],
  nacionalidade: "brasileiro",
};

for (const chave in pessoa) {
  //chave é a variável que irá receber cada chave do objeto pessoa a cada iteração do loop
  console.log(chave);
}

console.log("");

for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`); //pessoa[chave] é a sintaxe para acessar o valor associado à chave atual do objeto pessoa
}

const chaves = Object.keys(pessoa); //Object.keys() é um método que retorna um array contendo as chaves do objeto pessoa

const valores = Object.values(pessoa); //Object.values() é um método que retorna um array contendo os valores do objeto pessoa

const entrada = Object.entries(pessoa); //Object.entries() é um método que retorna um array de arrays, onde cada sub-array contém uma chave e seu valor correspondente do objeto pessoa

console.log(`Chaves: ${chaves}`);
console.log(`Valores: ${valores}`);
console.log(`Entrada [chave, valor]: ${entrada}`);
