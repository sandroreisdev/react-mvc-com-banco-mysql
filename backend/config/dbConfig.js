const sequelize = require('sequelize')

// const conexao = new sequelize('nome_do_banco', 'root','');
const conexao = new sequelize('programadorweb', 'root','',{
    host:'localhost',
    dialect:'mysql'
});

async function testaConexao(){
    try{
        await conexao.authenticate()
        console.log("BANCO CONECTADO COM SUCESSO")

    }catch(err){
            console.log("ERRO AO CONECTAR COM O BANCO DE DADOS")
    }
}

testaConexao()


