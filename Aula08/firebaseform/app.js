const express = require('express')
const bodyParser = require ('body-parser')
const admin = require('firebase-admin')
const handlebars = require('express-handlebars')

const app = express()
const PORT = 3000

//inicia firebase
const serviceAccount = require('./firebase-config.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://primeironode-js-default-rtdb.firebaseio.com"
  });

  const db = admin.database();

  // Configuração do motor de template Handlebars
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" })) // Define o motor de template Handlebars, com "main" como layout padrão
app.set("view engine", "handlebars") // Informa ao Express que o motor de visualização a ser usado será o Handlebars
app.set("views", "./views") // Define o diretório onde as views (templates) serão encontradas, neste caso a pasta "views"

//bodyParser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())

app.get('/cadastrar', (req, res)=>{
    res.render('formulario')
})

app.get('/', (req, res)=>{
    res.render('index')
})

//enviando formulario para banco de dados

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

app.get("/users", (req, res) => {
    db.ref("users")
    .once("value")
    .then((lista) => {
        const users = lista.val() || {};
        res.render("usuarios", { users });
    })
    .catch((error) => 
        res.status(500).send("erro ao buscar dados: " + error.message)
    );
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});