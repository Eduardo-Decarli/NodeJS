const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', '2004', {
    host: 'localhost',
    dialect: 'mysql'
})
//Um Model é uma representação de uma tabela de banco de dados e contem código JS que realiza mapeamento como bojeto
//sequelize.define irá definir uma tabela de banco de dados, desse jeito fazendo um modelo de uma tabela chamada postagens e suas colunas

const Postagem = sequelize.define('postagens', {
    //Aqui criamos uma coluna chamada titulo que recebe um tipo Varchar
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//sync serve para sincronizar a tabela do banco de dados com o model criado
//caso já exista uma tabela, o sync irá sincronizar uma tabela vazia 
// `sync` não fará nada se a tabela já existir, a menos que você use {force: true} ou {alter: true}
// {force: true} recria a tabela, o que resulta na perda de dados, use com cuidado!

Postagem.sync({}).then(function(){
    console.log("Sincronização feita com Sucesso")
}).catch(function(error){
    console.log(`Erro ao sincronizar: ${error}`)
})


//create é utilizado para adicionar dados ao banco de dados
//A função create recebe um objeto com os dados a serem inseridos

Postagem.create({
    titulo: "Era uma vez",
    conteudo: 'Conteudo de exemplo para uma linha de exemplo'
})

//Cria o model da tabela usuarios
const Usuarios = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//Sincroniza o model com o banco de dados
Usuarios.sync().then(function(){
    console.log('Sincronização executada com sucesso')
}).catch(function(error){
    console.log('Erro na Sincronização: ' + error)
})

//Adiciona a linha especificada ao banco de dados
Usuarios.create({
    nome: 'Roberto',
    sobrenome: 'da silva',
    idade: 7,
    email: 'emailTeste@teste.com'
});