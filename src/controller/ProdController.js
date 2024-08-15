const Prod = require("../models/Prod");
const ProdController = {
    create: async (req,res) =>{
        try {
            const { nome, preco, qtd } = req.body;
            const prodCriado = await Prod.create({ nome, preco, qtd });

            return res.status(200).json({
                msg:"Produto criado com sucesso!",
                prod: prodCriado,
            });
        }catch(error){
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"})
        }
    },
    update: async(req,res) =>{
        try {
            const { id } = req.params;
            const { nome, preco, qtd } = req.body;
      
            console.log({ id });
            console.log({ nome, preco, qtd });
      
            const prodUpdate = await Prod.findByPk(id);
      
            if (prodUpdate == null) {
              return res.status(404).json({
                msg: "produto nao encontrado",
              });
            }
      
            const updated = await prodUpdate.update({
              nome,
              preco,
              qtd,
            });
            if (updated) {
              return res.status(200).json({
                msg: "Produto atualizado com sucesso!",
              });
            }
          return res.status(500).json({
              msg:"Erro ao atualizar Produto"
          })
          } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte" });
          }
        },
        getAll: async (req, res) => {
          try {
            const produtos = await Prod.findAll();
            return res.status(200).json({
              msg: "Produto Encontrados!",
              produtos,
            });
          } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte" });
          }
        },
        getOne: async (req, res) => {
          try {
            const { id } = req.params;
      
            const produtoEncontrado = await Prod.findByPk(id);
      
            if (produtoEncontrado == null) {
              return res.status(404).json({
                msg: "Produto nao encontrado!",
              });
            }
            return res.status(200).json({
              msg: "Produto Encontrados",
              prod: produtoEncontrado,
            });
          } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte" });
          }
        },
        delete: async (req, res) => {
          try {
            const { id } = req.params;
      
            const prodFinded = await Prod.findByPk(id);
      
            if (prodFinded == null) {
              return res.status(404).json({
                msg: "Produto nao encontrado",
              });
            }
            await prodFinded.destroy();
      
            return res.status(200).json({
              msg: "Produto deletado com sucesso",
            });
          } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte" });
          }
        },
      };
      
      module.exports = ProdController;