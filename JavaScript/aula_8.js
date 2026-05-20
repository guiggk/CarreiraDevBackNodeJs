//funções Globais

function saudacao() {
  console.log("Iai, beleza?");
}

// setTimeout é uma função global do JavaScript que permite agendar a execução de uma função após um determinado tempo. Ela recebe dois parâmetros: a função a ser executada e o tempo em milissegundos.

setTimeout(saudacao, 2000); // segundo parâmetro é o tempo em milissegundos, ou seja, 2000ms = 2s

contador = 0;

const id = setInterval(() => {
  // setInterval é uma função global do JavaScript que permite agendar a execução de uma função repetidamente em um intervalo de tempo especificado. Ela recebe dois parâmetros: a função a ser executada e o intervalo de tempo em milissegundos.

  contador++;
  console.log("Tempo decorrido: " + contador + " segundos");
  if (contador === 10) {
    clearInterval(id);
    // clearInterval é uma função global do JavaScript que permite cancelar a execução de uma função agendada com setInterval. Ela recebe como parâmetro o identificador retornado por setInterval, que é usado para identificar qual intervalo deve ser cancelado.
  }
}, 1000);
