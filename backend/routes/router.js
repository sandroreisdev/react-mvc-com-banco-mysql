const express = require('express')
const adminController = require('../controllers/adminController')
const router = express.Router()

router.get("/", adminController.listarJogos)
//ANTES: primeiro vem end point ("/") e depois uma função () =>{}
//agora: primeiro vem end point ("/") 
// a funçção arrow funciton não vai ser feito a aqui e simm no controller
router.post("/cadastrar", adminController.cadastrarProduto)
router.post("/cadastar-cliente", adminController.cadastrarCliente)
router.get("/listar",adminController.listarProdutos)
module.exports = router // sabemos que esse router precisa ser exportado então por essa linha


