//Condições

nome = "Guilherme";

if (nome) {
  console.log(`Olá ${nome}, seja bem vindo!`);
} else {
  console.log("Ainda não sei o seu nome");
}

nome = "";

if (nome) {
  console.log(`Olá ${nome}, seja bem vindo!`);
} else {
  console.log("Ainda não sei o seu nome");
}

idade = 2;

if (idade != null) {
  if (idade >= 18) {
    console.log(`Sua idade é ${idade} anos`);
    console.log("Você é maior de idade, pode entrar!");
  } else {
    console.log(`Sua idade é ${idade} anos`);
    console.log("Você é menor de idade, não pode entrar!");
  }
} else {
  console.log("Idade inválida");
}
