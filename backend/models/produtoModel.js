const conexao = require('../config/dbConfig')
const { DataTypes } = require('sequelize')

const Produtos = conexao.define('produtos',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nome:{
        type:DataTypes.STRING        
    },
    valor:{
        type:DataTypes.FLOAT
    }
})

Produtos.sync()

module.exports = Produtos
