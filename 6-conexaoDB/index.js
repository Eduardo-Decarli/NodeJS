//Para conectar a um banco de dados, fazemos a chamada ao modulo sequilize
const Sequelize = require('sequelize');
//e instanciamos um objeto do tipo Sequelize
//Como parametros, identificamos o nome do banco de dados, o usuario, a senha e um objeto de conexão
const sequelize = new Sequelize("nomeTabela", "usuario", "senhaUsuario", {
    //Os parametros para o objeto de conexão são: O endereço Host e o tipo do banco de dados
    host: "localhost", 
    dialect: "mysql"
})

//A função autenticate() é usada para verificar se ocorreu corretamente a autenticação ao Banco de dados
//a função then é uma função de callback que mostra a ação acarretada pela autenticate
sequelize.authenticate().then(function(){
    console.log("Conectado com Sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar:" + erro)
});