const express = require('express');
const app = express()

app.get('/', function(req, res){
    //a função sendFile consegue capturar um arquivo HTML e servir ao servidor
    //Como o sendFile retorna o caminho direto do arquivo index, precisamos enviar o caminho absoluto, ou seja c:/user/exemplo/index.html
    //E para isso usamos a variavel __dirname
    res.sendFile(__dirname + '/index.html');
})

app.listen(8081);