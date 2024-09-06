//Import de módulos necessarios
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

//config Body Parser
app.use

//Rotas
app.get('/cadastro', function(req, res){
    res.sendFile(__dirname + '/main.html')
})

//Como nosso formulário está utilizando POST em vez de GET, nossa rota terá que ser encontrada via POST, então utilizamos o método POST do express
app.post('/add', function(req, res){
    res.send('FORMULÀRIO RECEBIDO')
})

const porta = 8081
app.listen(porta, function () {
    console.log(`O servidor está rodando na porta ${porta}`)
})