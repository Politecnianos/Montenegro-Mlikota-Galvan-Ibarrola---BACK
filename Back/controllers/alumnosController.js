const Alumno = require('../models/Alumno');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.getAllAlumnos = async(req, res) => {
    const alumnos = await Alumno.findAll();
    res.json(alumnos);
};

exports.getAlumnoById = async(req, res) => {
    const alumnos = await Alumno.findByPk(req.params.id);
    res.json(alumnos);
};

exports.createAlumno = async(req, res) => {
    const { dni, nombre, apodo, orientacion, curso, descripcion, mail, contrasena} = req.body;
    const contrasenaHash=  await bcrypt.hash(contrasena, 10);
    try{
        const nuevoAlumno = await Alumno.create({dni, nombre, apodo, orientacion, curso, descripcion, mail,  contrasena: contrasenaHash});
        res.json(nuevoAlumno);

    }catch(error){
        res.status(400).json({ msj: "Ocurrió un error", error})
    }
};

exports.updateAlumno = async(req, res) => {
    const { dni, nombre, apodo, orientacion, curso, descripcion, mail, contrasena} = req.body;
    const alumno = await Alumno.findByPk(req.params.id);
    if(alumno){
        alumno.dni = dni;
        alumno.nombre = nombre;
        alumno.apodo = apodo;
        alumno.orientacion = orientacion;
        alumno.curso = curso;
        alumno.descripcion = descripcion;
        alumno.mail = mail;
        alumno.contrasena = contrasena;
        await alumno.save();
        res.json(alumno);
    }else{
        res.status(404).send("Alumno not found");
    }
};

exports.deleteAlumno = async(req, res) => {
    const alumno = await Alumno.findByPk(req.params.id);
    if(alumno){
        await alumno.destroy();
        res.status(204).send("Alumno deleted succesfully");
    }else{
        res.status(404).send("Alumno not found");
    }
};

exports.loginUser = async(req, res) =>{
    const { mail, contrasena} = req.body;
    const alumnos = await Alumno.findAll({ where: { mail: mail } });
    const alumno = alumnos.length > 0 ? alumnos[0] : null;
    
    if(!alumno){
        return res.status(400).json({ msj: "No hay ningún usuario registrado con ese mail"});
    }

    const contrasenaCorrecta = await bcrypt.compare(req.body.contrasena, alumno.contrasena);

    if(!contrasenaCorrecta){
        return res.status(400).json({ msj: "Contraseña incorrecta"});
    }

    const token = jwt.sign({mail : mail}, process.env.SECRET_KEY || 'poli123');

    res.json(token);
};