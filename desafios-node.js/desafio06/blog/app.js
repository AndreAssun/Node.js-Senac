const express = require('express');
const app = express();

// Array de posts
const posts = [
    { id: 1, titulo: 'Primeiro Post', conteudo: 'Conteúdo do primeiro post', autor: 'Rodrigo' },
    { id: 2, titulo: 'Segundo Post', conteudo: 'Conteúdo do segundo post', autor: 'Angela' },
    { id: 3, titulo: 'Terceiro Post', conteudo: 'Conteúdo do terceiro post', autor: 'Leticia' }
];

// Rota para retornar a lista de posts com apenas IDs e títulos
app.get('/posts', (req, res) => {
    const listaPosts = posts.map(post => `ID: ${post.id}, Título: ${post.titulo}`).join('\n');
    res.send(listaPosts);
});

// Rota dinâmica para retornar um post específico
app.get('/blog/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId); // Usando find para buscar o post

    if (post) {
        res.send(`<h1>${post.titulo}</h1><p>${post.conteudo}</p>`);
    } else {
        res.status(404).send('<h1>Post não encontrado</h1>');
    }
});

// Última linha do seu código deve ser a do listen
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});