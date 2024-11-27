const Mensaje = require('../models/Mensaje');

exports.getAllMensajes = async (req, res) => {
    try {
        const mensajes = await Mensaje.findAll({
            order: [['fecha', 'DESC']] // Ordenar por la columna `fecha` en orden descendente
        });
        res.json(mensajes);
    } catch (error) {
        console.error("Error al obtener los mensajes:", error);
        res.status(500).json({ message: "Error al obtener los mensajes." });
    }
};


exports.getMensajeById = async(req, res) => {
    const mensaje = await Mensaje.findByPk(req.params.id);
    res.json(mensaje);
};

exports.createMensaje = async(req, res) => {
    const {dueno, contenido, fecha, seccion} = req.body;
    const nuevoMensaje = await Mensaje.create({dueno, contenido, fecha, seccion});
    res.json(nuevoMensaje);
};

exports.updateMensaje = async(req, res) => {
    const {dueno, contenido, fecha, seccion} = req.body;
    const mensaje = await Mensaje.findByPk(req.params.id);
    if(mensaje){
        mensaje.dueno = dueno;
        mensaje.contenido = contenido;
        mensaje.fecha = fecha;
        mensaje.seccion = seccion;
        await mensaje.save();
        res.json(mensaje);
    }else{
        res.status(404).send("Mensaje not found");
    }
};

exports.deleteMensaje = async(req, res) => {
    const mensaje = await Mensaje.findByPk(req.params.id);
    if(mensaje){
        await mensaje.destroy();
        res.status(204).send("Mensaje deleted succesfully");
    }else{
        res.status(404).send("Mensaje not found");
    }
};