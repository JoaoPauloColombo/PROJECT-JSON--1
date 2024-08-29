const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Cliente = sequelize.define('cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pedidos: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Cliente;