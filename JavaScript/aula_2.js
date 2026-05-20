//Criando Variáveis

const dataAniversario = "26/05/2004";

idade = 21;

console.log(idade, " Anos"); // Exibe o valor da variável "idade" no console do navegador

console.log("Minha idade atual: " + idade + " Anos"); // Exibe a mensagem "Minha idade atual: " seguida do valor da variável "idade" no console do navegador

console.log(`Minha idade atual: ${idade} Anos`); // Exibe a mensagem "Minha idade atual: " seguida do valor da variável "idade" usando template literals no console do navegador

idade = 22;

console.log(
  `Minha idade depois do aniversário(${dataAniversario}): ${idade} Anos`,
); // Exibe a mensagem "Minha idade depois do aniversário: " seguida do valor da variável "idade" usando template literals no console do navegador
