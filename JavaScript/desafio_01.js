//Faça um programa que calcule o troco a ser dado em uma compra. O programa deve solicitar o valor da compra e o valor pago pelo cliente, e então calcular e exibir o valor do troco.

console.log("Bem vindo a Calculadora de Troco \n");

valorCompra = 17.5;

valorPago = 20.0;

troco = valorPago - valorCompra;
console.log(`Valor da compra: R$${valorCompra.toFixed(2)}`);

console.log(`Valor pago: R$${valorPago.toFixed(2)}\n`);

console.log(`O valor do troco é: R$${troco.toFixed(2)}`);
