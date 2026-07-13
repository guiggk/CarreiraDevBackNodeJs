//if/else

const num1 = 2;

const num2 = 4;

const operacao = "somar";

if (operacao == "somar") {
  console.log(`O resultado da Soma é: ${num1 + num2}`);
} else if (operacao == "multiplicar") {
  console.log(`O resultado da Multiplicação é: ${num1 * num2}`);
} else {
  console.log("Operação Invalida");
}

let salario = 2000;

if (salario >= 11000) {
  console.log("O seu Bônus é de 3%");
  salario = salario + salario * 0.03;
  console.log(`O seu salário com o Bônus é de: ${salario}`);
}
if (salario >= 7000 && salario <= 10999) {
  console.log("O seu Bônus é de 5%");
  salario = salario + salario * 0.05;
  console.log(`O seu salário com o Bônus é de: ${salario}`);
}
if (salario >= 4000 && salario <= 6999) {
  console.log("O seu Bônus é de 7%");
  salario = salario + salario * 0.07;
  console.log(`O seu salário com o Bônus é de: ${salario}`);
} else {
  console.log("O seu Bônus é de 9%");
  salario = salario + salario * 0.09;
  console.log(`O seu salário com o Bônus é de: ${salario}`);
}
