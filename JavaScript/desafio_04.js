// Desafio 04: Verificador de Senha

console.log("Bem vindo ao Verificador de Senha \n");

//Realidade 1: Senha bem sucedida

const senha = 225601;
senhaDigitada = 225601;
if (senhaDigitada === senha) {
  console.log(`Senha digitada: ${senhaDigitada}`);
  console.log("Senha correta, acesso permitido!");
} else {
  console.log(`Senha digitada: ${senhaDigitada}`);
  console.log("Senha incorreta, acesso negado!");
}

//Realidade 2: Senha incorreta

senhaDigitada = 123456;

if (senhaDigitada === senha) {
  console.log(`Senha digitada: ${senhaDigitada}`);
  console.log("Senha correta, acesso permitido!");
} else {
  console.log(`Senha digitada: ${senhaDigitada}`);
  console.log("Senha incorreta, acesso negado!");
}
