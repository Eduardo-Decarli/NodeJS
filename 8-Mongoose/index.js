const mongoose = require('mongoose')

//Configuração de Conexão ao mongoDB
//Primeiro a função connect recebe o local de conexão do banco de dados, seguido pelo nome do banco, se o banco especificado não existir, o mongoose irá criar
mongoose.connect('mongodb://localhost/nomeDoBanco').then(() => {
    console.log('Servidor conectado com sucesso')
}).catch(() => {
    console.log('Houve um erro ao se conectar ao mongoDB')
})

//Definindo Models

//Um padrão de desenvolvimento é definir os models com prefixo Schem
const usuarioSchem = mongoose.Schema({
    nome: {
        //Define o tipo da variavel a ser armazenada
        type: String,
        //Define se a variavel será obrigatória, por padrão será false
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
})

//Define a collection(ou a tabela) que será armazenado o schema criado
//Os parametros são, ('nome da tabela', variavel do model)
mongoose.model('usuarios', usuarioSchem)

//Para criar um usuario na collection usuarios

new usuarioSchem({
    nome: 'vitor',
    sobrenome: 'Lima',
    email: 'teste@teste.com',
    idade: 19
})
