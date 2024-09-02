//Importar o modulo HTTP
let http = require('http');

//createServer é a função para abrir um servidor
//createServer recebe uma função de callback, onde res significa resposta
http.createServer(function(req, res){
    //res.end() é utilizado para enviar uma mensagem ao servidor
    res.end('Welcome to my website');
})
//A função listen que é chamada a partir do createServer, é onde declaramos a porta de escuta do servidor
.listen('8081');

console.log('O servidor está rodando')