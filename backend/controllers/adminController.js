const Clientes = require("../models/clientesModel")
const Produtos = require("../models/produtoModel")

class adminController{
    // criei essa classe para receber todas funções que precisaremos, pré definidas
    static async listarJogos(req, res){
        // res.json({message: "Jogos listados com sucesso"})
        res.send("ROTA JOGOS")
    }

    static async cadastrarProduto(req,res){
        try {                      
            const {nome,valor} = req.body  
             
            const novoProduto = await Produtos.create({nome,valor})

            res.json({message:"Produto cadastrado com suscesso", dados: novoProduto})

            
        } catch (err) {           
            res.json({message: "Não foi possível cadastrar o produto"})
        }    

    }

    static async cadastrarCliente(req, res){
        try {
            // const nome = req.body
            // const novoCliente = await Clientes.create(nome)
            // res.json({message: "Cliente cadastrado com sucesso", dados: novoCliente})
            const {nome} = req.body

            if(!nome){
                return res.json({message: "Informe um nome válido"})
            }

            const clienteExiste = await Clientes.findOne({ where:{nome: nome}})
            if(clienteExiste){
                return res.json({message: "Cliente já cadastrado"})
            }

            const novoCliente = await Clientes.create(nome)

            req.json({message: "Novo cliente criado com sucesso"})
        } catch (err) {
            res.json({message: "Não foi possível cadastrar o cliente"})            
        }
    }

    static async listarProdutos(req, res){
        try {
            const produtos = await Produtos.findAll()
            res.json(produtos)
            
        } catch (err) {
            res.json({message:"Não foi possível listar o produto"})
        }
    }
}
module.exports = adminController