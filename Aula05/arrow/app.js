//const somar = (a,b) => a + b;

//console.log(somar(3,4))

//1. Crie uma arrow function que receba o ano de nascimento de uma
//pessoa e o ano atual, e retorne a idade da pessoa.

const calcularIdade =  (a,b) => b - a;
console.log(calcularIdade(1995, 2024))


//Escreva uma arrow function que receba um array de números e retorne um
//novo array com todos os números dobrados.


// Define a função 'duplica' que aceita um array 'lista' como argumento
const duplica = (lista) => {
    // Inicializa um array vazio para armazenar os valores duplicados
    let listaDuplicada = [];
    
    // Declara a variável 'i' para uso no loop
    let i; 
    
    // Inicia um loop que itera sobre cada elemento do array 'lista'
    for (i = 0; i < lista.length; i++) {
        // Multiplica o elemento atual por 2 e o adiciona ao array 'listaDuplicada'
        listaDuplicada.push(lista[i] * 2);
    }
    
    // Retorna o array contendo os valores duplicados
    return listaDuplicada;
};

// Chama a função 'duplica' com o array [5, 6, 8] e exibe o resultado no console
console.log(duplica([5, 6, 8]));



