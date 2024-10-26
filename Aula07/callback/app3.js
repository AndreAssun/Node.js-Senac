//Objetivo:

//Crie um contador regressivo que exibe uma contagem de 10 segundos na tela. Durante essa
//contagem, exiba os segundos restantes a cada segundo (usando setInterval). Após a
//contagem regressiva chegar a 0, mostre a mensagem "Tempo esgotado!" (usando
//setTimeout).



var contador = 10;

const intervalo = setInterval(() => {
    console.log(contador);
    contador--;

    // Quando o contador atingir 0
    if (contador < 0) {
        clearInterval(intervalo); // Para o intervalo
        setTimeout(() => {
            console.log("Tempo esgotado!"); // Exibe a mensagem final
        }, 100); // Pequeno atraso para garantir que o 0 seja exibido antes da mensagem
    }
}, 1000); // Atualiza a cada 1 segundo
















