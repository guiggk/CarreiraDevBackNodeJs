//callbackHOF

//HOF - Higher Order Function === Função que recebe outra função como parâmetro

//Callback - função de retorno

function calcular(numero1, numero2, operacao) {
  return operacao(numero1, numero2);
}

function soma(a, b) {
  return a + b;
}

function multiplicacao(a, b) {
  return a * b;
}

function subtracao(a, b) {
  return a - b;
}

function divisao(a, b) {
  if (b === 0) {
    return "Não é possível dividir por zero!";
  } else {
    return a / b;
  }
}

const resultadoSoma = calcular(10, 5, soma);
const resultadoMultiplicacao = calcular(10, 5, multiplicacao);
const resultadoSubtracao = calcular(10, 5, subtracao);
const resultadoDivisao = calcular(10, 5, divisao);

console.log(`Resultado da Soma: ${resultadoSoma}`);
console.log(`Resultado da Multiplicação: ${resultadoMultiplicacao}`);
console.log(`Resultado da Subtração: ${resultadoSubtracao}`);
console.log(`Resultado da Divisão: ${resultadoDivisao}`);
