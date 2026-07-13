// Trabalhando com datas

const agora = new Date(); // data atual

console.log(agora);

console.log(`ano: ${agora.getFullYear()}`); // ano

console.log(`mês: ${agora.getMonth()}`); // mês

console.log(`dia: ${agora.getDate()}`); // dia do mês de 0-11

console.log(`hora: ${agora.getHours()}`); // hora

console.log(`minutos: ${agora.getMinutes()}`); // minutos

console.log(`segundos: ${agora.getSeconds()}`); // segundos

const nascimento = new Date("2004-05-26T03:00:00.000Z");

console.log(nascimento);

console.log(`Data formatada(BR): ${nascimento.toLocaleDateString("pt-BR")}`); // data formatada para o formato brasileiro

console.log(`Data formatada(US): ${nascimento.toLocaleDateString("en-US")}`); // data formatada para o formato americano
