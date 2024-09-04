//Os operadores || e && são operadores de comparação, Ou seja, eles servem para testar se duas ou mais expressões são verdadeiras ou não.

//O operador ||, conhecido como "OR" (ou), retorna verdadeiro se pelo menos UMA das expressões fornecidas for verdadeira.
//Por outro lado, o operador &&, também conhecido como "AND" (e), testa se as DUAS (ou mais) expressões comparadas são veridadeiras.


var nota1 = 6;
var nota2 = 7;
var nota3 = 9;
var media = (nota1 + nota2 + nota3) / 3

if (media < 3) {
    console.log(`Sua média é ${media.toFixed(1)} \nVoce esta REPROVADO`)
} else if (media >= 3 && media <= 6) { //operador &&, também conhecido como "AND" (e)
    console.log(`Sua média é ${media.toFixed(1)} \nVoce esta de RECUPERAÇÃO, procure informações com a diretoria !`)
} else {
    console.log(`Sua média é ${media.toFixed(1)} \nParabéns, voce esta APROVADO, boas férias :)`)
}
