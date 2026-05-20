// Desafio 06 - Sistema de Saudação de acordo com a hora

console.log("Bem vindo ao Sistema de Saudação de acordo com a hora \n");

horaDoDia = 4; // Realidade 1: Hora do dia para saudação de bom dia

if (horaDoDia == 6 || horaDoDia < 12) {
  console.log(`São ${horaDoDia} horas, bom dia!`);
} else if (horaDoDia == 13 || (horaDoDia < 18 && horaDoDia > 12)) {
  console.log(`São ${horaDoDia} horas, boa tarde!`);
} else {
  console.log(`São ${horaDoDia} horas, boa noite!`);
}
horaDoDia = 15; // Realidade 2: Hora do dia para saudação de boa tarde

if (horaDoDia == 6 || horaDoDia < 12) {
  console.log(`São ${horaDoDia} horas, bom dia!`);
} else if (horaDoDia == 13 || (horaDoDia < 18 && horaDoDia > 12)) {
  console.log(`São ${horaDoDia} horas, boa tarde!`);
} else {
  console.log(`São ${horaDoDia} horas, boa noite!`);
}
horaDoDia = 22; // Realidade 3: Hora do dia para saudação de boa noite

if (horaDoDia == 6 || horaDoDia < 12) {
  console.log(`São ${horaDoDia} horas, bom dia!`);
} else if (horaDoDia == 13 || (horaDoDia < 18 && horaDoDia > 12)) {
  console.log(`São ${horaDoDia} horas, boa tarde!`);
} else {
  console.log(`São ${horaDoDia} horas, boa noite!`);
}
