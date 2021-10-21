const Sequelize = require('sequelize');
const database = require('./db');

const Cliente = database.define('cliente', {
    cnpj: {
        type: Sequelize.STRING(18),
        allowNull: false
    }, 
    razao_social: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
});

module.exports = Cliente;