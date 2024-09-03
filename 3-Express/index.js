//O express é um módulo Express que tem uma mesma finalidade do módulo http, porem mais bem implementado e flexivel
//Importa o Express
const express = require('express')

//Instancia o Express na variavel app
const app = express();

//O Método Get é utilizado para definir uma rota a aplicação
//Os parametros req e res servem para lidar com envios e recebimentos HTTP, res vem resposta, então tudo que é enviado se utiliza res, e req vem de requerimento, então tudo que é recebido vem de req
app.get('/', function(req, res){
    res.send('Seja Bem vindo ao meu Servidor Express')
})

//Para criar uma rota a tela 'sobre' podemos utilizar novamente o método get
app.get('/sobre', function(req, res){
    res.send('Essa é a tela sobre, pode ser acessada em localhost:8081/sobre')
})

app.get('/blog', function(req, res){
    res.send('Essa é a tela blog')
})

//Torna o app um servidor com Express(Tudo que for escrito a baixo dessa linha, não será enviado para o servidor, por isso terá que ser a ultima linha do código)
app.listen(8081, function(){
    console.log('servidor rodando no localhost:8081');
})