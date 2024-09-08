// Import de módulos necessários
const express = require('express');
const app = express();
// Body Parser é um módulo útil para captação de formulários
const bodyParser = require('body-parser');
// Import do módulo Post
const Post = require('./models/Post.js');
const { engine } = require('express-handlebars');
const path = require('path'); // Importar path para manipulação de caminhos

// Configuração do Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração do handlebars
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Rotas
app.get('/', function (req, res) {
    // Função que retorna todos os objetos Post do banco de dados
    Post.findAll().then(function (posts) {
        res.render('home', {
            posts: posts
        });
    }).catch(function (error) {
        res.send('Ocorreu um erro ao buscar os posts: ' + error);
    });
});

app.get('/cadastro', function (req, res) {
    res.render('formulario');
});

// Como nosso formulário está utilizando POST em vez de GET, nossa rota terá que ser encontrada via POST
app.post('/add', function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        // Função para redirecionar a página após o POST ser criado
        res.redirect('/');
    }).catch(function (error) {
        res.send('Ocorreu um erro durante o envio do formulário, Erro: ' + error);
    });
});

// Rota para Deletar
app.get('/deletar/:id', function (req, res) {
    Post.destroy({ where: { id: req.params.id } }).then(function () {
        res.send('Postagem Deletada');
    }).catch(function () {
        res.send('Esta postagem Não existe');
    });
});

// Configuração da porta
const porta = 8081;
app.listen(porta, function () {
    console.log(`O servidor está rodando na porta ${porta}`);
});
