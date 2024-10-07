const express = require ('express');
const Alumno = require('./models/Alumno');
const Mensaje = require('./models/Mensaje');
const Respuesta = require('./models/Respuesta');
const sequelize = require('./database');
const dotenv = require('dotenv');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('Server is running on port', port);
});

app.use(express.json());
dotenv.config();

const alumnosRoutes = require('./routes/alumnos');
const mensajesRoutes = require('./routes/mensajes');
const respuestasRoutes = require('./routes/respuestas');

app.use('/alumnos', alumnosRoutes);
app.use('/mensajes', mensajesRoutes);
app.use('/respuestas', respuestasRoutes);


sequelize.sync({force : false}).then(() => {
    console.log("All models are synchronized succesfully");
}).catch(error => {
    console.log('Error occurred during model synchronization: ' , error);
});

