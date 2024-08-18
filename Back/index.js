const express = require ('express');
const Alumno = require('./models/Alumno');
const sequelize = require('./database');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('Server is running on port', port);
});

app.use(express.json());


const alumnosRoutes = require('./routes/alumnos');

app.use('/alumnos', alumnosRoutes);


sequelize.sync({force : false}).then(() => {
    console.log("All models are synchronized succesfully");
}).catch(error => {
    console.log('Error occurred during model synchronization: ' , error);
});

