const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../database');

const Mensaje = sequelize.define('Mensaje', {
    dueno: {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    contenido: {
        type : DataTypes.STRING,
        allowNull : false
    },    
    fecha: {
        type : DataTypes.DATE,
        allowNull : false
    }
});

module.exports = Mensaje;