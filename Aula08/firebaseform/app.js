const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const admin = require('firebase-admin')
const app = express()
const port = 3000


// Configuração do motor de template Handlebars
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" })) // Define o motor de template Handlebars, com "main" como layout padrão
app.set("view engine", "handlebars") // Informa ao Express que o motor de visualização a ser usado será o Handlebars
app.set("views", "./views") // Define o diretório onde as views (templates) serão encontradas, neste caso a pasta "views"

// Configuração do body-parser para processar dados das requisições POST
app.use(bodyParser.urlencoded({ extended: true })) // Lê dados de formulários no formato URL-encoded
app.use(bodyParser.json()) // Lê dados no formato JSON (geralmente para APIs)


// Configuração do fire-base admin
const serviceAccount = require('./firebase-config.json')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount), // Credencial
    databaseURL: 'https://primeironode-js-default-rtdb.firebaseio.com/' //URL do seu bando de dados Firebase
})

const db = admin.database()

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/cadastrar', (req, res) => {
    res.render('formulario')
})

app.post('/submit', (req, res) => {
    const id = req.body.id
    const nome = req.body.nome
    const idade = req.body.idade

    //validação de dados
    if (!id || !nome || !idade) {
        return res.status(400).send('Campos ID e Nome são obrigatórios');
    }

     // Salva os dados no Firebase

    db.ref('users/' + id).set({ nome, idade })
    .then(() => res.send('Dados salvos com sucesso no firebase !'))
    .catch(error => res.status(500).send('Erro ao salvar dados: ' + error.message));
})



// Inicia o servidor na porta 3000
app.listen(port, () => {
    // Imprime no console a mensagem indicando que o servidor está rodando
    console.log(`Servidor rodando em http://localhost:${port}`)
})
