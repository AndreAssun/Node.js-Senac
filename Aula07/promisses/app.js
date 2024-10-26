//Objetivo:

//Crie diretamente uma Promise que verifica se uma pessoa tem idade suficiente para acessar um
//site. Se a pessoa tiver 18 anos ou mais, a Promise será resolvida com uma mensagem de
//sucesso. Se tiver menos de 18 anos, a Promise será rejeitada com uma mensagem de erro.


// Função que verifica a idade e retorna uma Promise
const verificarIdade = new Promise((resolve, reject) => {
// Define uma variável idade
    const idade = 20
        // Verifica se a idade é maior ou igual a 18
        if (idade >= 18) {
            // Resolve a Promise com a mensagem de sucesso
            resolve("Acesso permitido");
        } else {
            // Rejeita a Promise com a mensagem de erro
            reject("Acesso negado");
        }
});


// Exemplo de uso da Promise
verificarIdade// Altere o valor para testar
    .then((dados) => {
        // Lida com a resolução da Promise
        console.log(dados);
    })
    .catch((err) => {
        // Lida com a rejeição da Promise
        console.log("Erro: " + err);
    });
