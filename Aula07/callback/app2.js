//callback assincrona

//console.log("Início do programa")

//setTimeout(function(){
   //console.log("Testando o delay do setTimeout")
//},1000)

//console.log("Fim do programa")


//callback assíncrona - criando loops

//setInterval(function(){
   // console.log("Testando o loop com setInterval")
//},1000)


//callback assincrona - ClearInterval

//var contador = 0

//const mensagem = setInterval(()=>{
    //console.log("esta mensagem sera exibida 3 vezes")
    //contador ++
    //if(contador ==3){
        //clearInterval(mensagem)
   // }
//},500)



//callback assincrona - ClearTimeout

const timeoutID = setTimeout(() => {
    console.log("Isso não será exibido porque vamos cancelar!");
}, 5000); //5 segundos

//cancelando o setTimeout
clearTimeout(timeoutID);

console.log("O setTimeout foi cancelado antes de ser executado,");



