const db = require('./DB')

//Criar uma variavel que recebe o modelo do banco de dados para as postagens
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

//Comentamos o sync para ele não gerar um banco de dados vazio novamente
//Post.sync({force: true})

//Export do Post para o index.js
module.exports = Post;