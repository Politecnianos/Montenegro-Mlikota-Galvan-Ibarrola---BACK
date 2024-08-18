const Alumno = require('../models/Alumno');

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
    const nuevoAlumno = await Alumno.create({dni, nombre, apodo, orientacion, curso, descripcion, mail, contrasena});
    res.json(nuevoAlumno);
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