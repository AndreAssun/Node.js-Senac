const http = require ('http')

http.createServer((req,res)=>{
    res.end("Olá Servidor !")
}).listen(8081,()=>{   //localhost:8081 e para quebrar o servidor Clt + C
    console.log("Servidor rodando")
})
