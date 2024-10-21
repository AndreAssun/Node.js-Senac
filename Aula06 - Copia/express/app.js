const express = require('express')
const app = express()
const msg = "Página de Login"

//const porta = 8081 - é um exemplo de como posso tranferir a porta para uma variavel.


app.get("/", (req,res) =>{
    res.send("Olá! Seja bem vindo a minha página web :) ")
})

app.get("/login", (req,res)=>{
    res.send(msg)
})

app.get("/user/:id", (req,res)=>{
    var id = req.params.id
    var nome = req.params.nome
    res.send("Id:" + id + "<br>Nome" + nome)
})









//ultima linha do seu código deve ser a do listen:
app.listen(8081, ()=>{
    console.log("Servidor rodando em http://localhost:8081")
})