const db = require('./db')

const Equipe = db.sequelize.define('equipe', {
    nome:{
        type: db.Sequelize.STRING
    },
    atividade:{
        type: db.Sequelize.TEXT
    },
    prazo:{
        type: db.Sequelize.DATE
    }
})
Equipe.sync({force:true})
module.exports = Equipe