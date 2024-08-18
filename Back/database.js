const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Politecnianos', 'root', 'juli1411', {
    host: 'localhost',
    dialect : 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Connection established succesfully');
})

    .catch(err => {
        console.error('Unable to connect to the database', err);
    });

module.exports = sequelize;

