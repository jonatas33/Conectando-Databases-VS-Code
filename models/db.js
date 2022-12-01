const Sequelize = require('sequelize')

//Conexão com Banco de Dados

const sequelize = new Sequelize ('backsenac', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

//Exportar o Sequelize e sequelize no mesmo arquivo
//Auxilia pois cada models terá um arquivo individual.

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}