const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../database');

const Alumno = sequelize.define('Alumno', {
    dni: {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    nombre: {
        type : DataTypes.STRING,
        allowNull : false
    },
    apodo: {
        type : DataTypes.STRING,
        allowNull : false
    },    
    orientacion: {
        type : DataTypes.STRING,
        allowNull : false
    },
    curso: {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    descripcion: {
        type : DataTypes.STRING,
        allowNull : false
    },
    mail: {
        type : DataTypes.STRING,
        allowNull : false
    },
    contrasena: {
        type : DataTypes.STRING,
        allowNull : false
    }
});

module.exports = Alumno;