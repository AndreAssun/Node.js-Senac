function vantagem() {
    const precoAlc = 5;
    const precoGas = 25;

    //  precoAlc <= 70% do precoGas

    const calcPorcentagem = 70/100 * precoGas

    if (precoAlc <= calcPorcentagem) {
        console.log(`O preço da gasolina é ${precoGas}, 70% do valor dele é ${calcPorcentagem} e o preço do álcol é ${precoAlc}, ou seja é VATAGEM ABASTECER COM ÁLCOOL`)
    } else {
        console.log(`O preço da gasolina é ${precoGas}, 70% do valor dele é ${calcPorcentagem} e o preço do álcol é ${precoAlc}, ou seja é NÃO É VANTAGEM ABASTECER COM ÁLCOOL`)
    }
}

vantagem()