const moment = require('moment');

//Exibe a data e hora atual
const agora = moment().format('DD/MM/YYYY HH:mm:ss');
console.log("Data e Hora Atual:", agora);

//Adicione 7 dias à data atual e exiba o resultado:

const seteDiasDepois = moment().add(7, 'days').format('DD/MM/YYYY');
console.log("7 dias depois:", seteDiasDepois);

//Agora, subtraia 5 dias e exiba o resultado

const cincoDiasAntes = moment().subtract(5, 'days').format('DD/MM/YYYY');
console.log("5 dias antes:",  cincoDiasAntes);

//Como você poderia adicionar meses ou anos à data atual? Teste isso em seu código.

// Adicionando 3 anos
const tresAnosDepois = moment().add(3, 'years').format('DD/MM/YYYY');
console.log("3 anos depois:", tresAnosDepois);

//Escolha duas datas e calcule a diferença entre elas em dias:
const dataInicial = moment('2023-01-01', 'YYYY-MM-DD');
const dataFinal = moment('2023-12-31', 'YYYY-MM-DD');
const diferenca = dataFinal.diff(dataInicial, 'days');
console.log("Diferença em dias:", diferenca);

//Pergunta: Qual seria o resultado se você quisesse calcular a diferença em meses ou anos? Modifique o código para testar.