// modelo/models é a representação da nossa tabela
const { DataTypes, Model } = require('sequelize')

const conexao = require('../config/dbConfig')

const Clientes = conexao.define('clientes',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type: DataTypes.STRING
    }
})

Clientes.sync()

module.exports = Clientes

