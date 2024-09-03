const express = require('express')
const app = express();

//Quando colocamos /: em uma rota, definimos que estamos utilizando um parametro na URL,
// no exemplo abaixo, 'nome' e 'cargo' são os parametros, se o usuario digitar por exemplo 'http://localhost:8081/parametros/Eduardo/Programador' irá retornar os o objeto contendo nome: Eduardo e cargo: Programador
app.get('/parametros/:nome/:cargo', function(req, res) {
    //req.params recupera como objeto os parametros informatos com valores que o usuario inserio na URL
    /*res.send(req.params)*/
    //Dessa forma podemos resgatar parametros especificos do objeto recebido no req.params
    res.send(`<h1>Olá ${req.params.nome} Você é um ${req.params.cargo}</h1>`)
})

app.listen('8081', function(){
    console.log('o servidor está rodando')
})