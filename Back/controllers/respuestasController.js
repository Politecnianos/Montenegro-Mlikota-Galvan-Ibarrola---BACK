const Respuesta = require('../models/Respuesta');

exports.getAllRespuestas = async(req, res) => {
    const respuestas = await Respuesta.findAll();
    res.json(respuestas);
};

exports.getRespuestaById = async(req, res) => {
    const respuesta = await Respuesta.findByPk(req.params.id);
    res.json(respuesta);
};

exports.createRespuesta = async(req, res) => {
    const {dueno, rtaMensaje, contenido, fecha} = req.body;
    const nuevaRespuesta = await Respuesta.create({dueno, rtaMensaje, contenido, fecha});
    res.json(nuevaRespuesta);
};

exports.updateRespuesta = async(req, res) => {
    const {dueno, rtaMensaje, contenido, fecha} = req.body;
    const respuesta = await Respuesta.findByPk(req.params.id);
    if(respuesta){
        respuesta.dueno = dueno;
        respuesta.rtaMensaje = rtaMensaje;
        respuesta.contenido = contenido;
        respuesta.fecha = fecha;
        await respuesta.save();
        res.json(respuesta);
    }else{
        res.status(404).send("Respuesta not found");
    }
};

exports.deleteRespuesta = async(req, res) => {
    const respuesta = await Respuesta.findByPk(req.params.id);
    if(respuesta){
        await respuesta.destroy();
        res.status(204).send("Respuesta deleted succesfully");
    }else{
        res.status(404).send("Respuesta not found");
    }
};