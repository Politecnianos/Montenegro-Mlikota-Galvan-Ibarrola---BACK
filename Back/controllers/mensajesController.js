const Mensaje = require('../models/Mensaje');

exports.getAllMensajes = async(req, res) => {
    const mensajes = await Mensaje.findAll();
    res.json(mensajes);
};

exports.getMensajeById = async(req, res) => {
    const mensaje = await Mensaje.findByPk(req.params.id);
    res.json(mensaje);
};

exports.createMensaje = async(req, res) => {
    const {dueno, contenido, fecha} = req.body;
    const nuevoMensaje = await Mensaje.create({dueno, contenido, fecha});
    res.json(nuevoMensaje);
};

exports.updateMensaje = async(req, res) => {
    const {dueno, contenido, fecha} = req.body;
    const mensaje = await Mensaje.findByPk(req.params.id);
    if(mensaje){
        mensaje.dueno = dueno;
        mensaje.contenido = contenido;
        mensaje.fecha = fecha;
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