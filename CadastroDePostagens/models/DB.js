const Sequelize = require('sequelize')

//Conexão mysql via sequelize
const sequelize = new Sequelize('postapp', 'root', '2004', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}