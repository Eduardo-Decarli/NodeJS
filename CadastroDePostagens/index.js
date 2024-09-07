//Import de módulos necessarios
const express = require('express');
//Body Parser é um módulo util para captação de formulários
const bodyParser = require('body-parser')
//Import do módulo Post
const Post = require('./models/Post.js')
const app = express();

//config Body Parser
app.use(bodyParser.urlencoded({extened: false}))
app.use(bodyParser.json())

//Rotas

app.get('/', function(req, res){
    res.sendFile(__dirname + '/view/home.html')
})

app.get('/cadastro', function(req, res){
    res.sendFile(__dirname + '/view/main.html')
})

//Como nosso formulário está utilizando POST em vez de GET, nossa rota terá que ser encontrada via POST, então utilizamos o método POST do express
app.post('/add', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        //Função para redirecionar a pagina após o POST ser criado
        res.redirect('/');
    }).catch(function(error){
        res.send('Occoreu um erro durante o envio do formulário, Erro: ' + error)
    })
})

const porta = 8081
app.listen(porta, function () {
    console.log(`O servidor está rodando na porta ${porta}`)
})