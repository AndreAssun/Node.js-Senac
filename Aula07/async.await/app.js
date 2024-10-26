function primeiraFuncao(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Espera de 1 segundo")
            resolve()
        },1000)
    })
}


async function segundaFuncao(){
    console.log("Iniciou a segunda função")
    await primeiraFuncao()
    console.log("Terminou a segunda função ")
}


segundaFuncao()