const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../database');

const Respuesta = sequelize.define('Respuesta', {
    dueno: {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    rtaMensaje: {
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

module.exports = Respuesta;