//desafio 22 - calculo de compra com base em um objeto

const produto = {
  preco: 8.9,
  quantidade: 5,
};

function calcularProduto(produto) {
  const total = produto.preco * produto.quantidade;
  return total;
}

console.log(calcularProduto(produto).toFixed(2));
