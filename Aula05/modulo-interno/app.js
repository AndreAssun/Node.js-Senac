//importação do modulo
const readline = require('readline');

//Criando uma interface para ler entrada e saída do terminal
const rl = readline.createInterface({
    input: process.stdin, //Captura a entrada do terminal
    output: process.stdout //Exibe a saída do terminal
});

//Faz uma pergunta ao usuário
rl.question("Qual é o seu nome? ", (nome) => {
    console.log(`Olá,${nome}!`);
    rl.close(); //Fecha a interface após a resposta
});