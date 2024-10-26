//callback síncrona

function executarOperacao(x,y, callback){
    let resultado = x+y
    callback(resultado);
}

function exibirResultado (res){
    console.log("Resultado:", res);
}

executarOperacao(5,3, exibirResultado);