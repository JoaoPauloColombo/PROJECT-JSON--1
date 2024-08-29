const Cliente = require("../models/Cliente");

const ClienteController = {
  create: async (req, res) => {
    try {
      const { nome, email, pedidos } = req.body;

      const clienteCriado = await Cliente.create({ nome, email, pedidos });

      return res.status(200).json({
        msg: "Cliente criado com sucesso!",
        user: clienteCriado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, pedidos } = req.body;

      console.log({ id });
      console.log({ nome, email, pedidos });

      const clienteUpdate = await Cliente.findByPk(id);

      if (clienteUpdate == null) {
        return res.status(404).json({
          msg: "Cliente nao encontrado",
        });
      }

      const updated = await clienteUpdate.update({
        nome,
        email,
        pedidos,
      });
      if (updated) {
        return res.status(200).json({
          msg: "Cliente atualizado com sucesso!",
        });
      }
    return res.status(500).json({
        msg:"Erro ao atualizar usuario"
    })
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  getAll: async (req, res) => {
    try {
      const clientes = await Cliente.findAll();
      return res.status(200).json({
        msg: "Clientes Encontrados!",
        clientes,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;

      const clienteEncontrado = await Cliente.findByPk(id);

      if (clienteEncontrado == null) {
        return res.status(404).json({
          msg: "Cliente nao encontrado!",
        });
      }
      return res.status(200).json({
        msg: "Cliente Encontrados",
        usuario: clienteEncontrado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const clienteFinded = await Cliente.findByPk(id);

      if (clienteFinded == null) {
        return res.status(404).json({
          msg: "Cliente nao encontrado",
        });
      }
      await clienteFinded.destroy();

      return res.status(200).json({
        msg: "Cliente deletado com sucesso",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
};

module.exports = ClienteController;
