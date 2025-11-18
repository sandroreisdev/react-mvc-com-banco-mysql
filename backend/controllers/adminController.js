class adminController{
    // criei essa classe para receber todas funções que precisaremos, pré definidas
    static async listarJogos(req, res){
        // res.json({message: "Jogos listados com sucesso"})
        res.send("ROTA JOGOS")
    }

}
module.exports = adminController