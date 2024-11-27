const express = require('express');
const router = express.Router();
const validateToken = require('./validate-token');
const alumnosController =require ('../controllers/alumnosController')

router.get('/', validateToken, alumnosController.getAllAlumnos);
router.get('/mail/:mail', validateToken, alumnosController.getDniByMail);
router.get('/:id', validateToken, alumnosController.getAlumnoById);
router.post('/', alumnosController.createAlumno);
router.post('/login', alumnosController.loginUser)
router.put('/:id', validateToken, alumnosController.updateAlumno);
router.delete('/:id', validateToken, alumnosController.deleteAlumno);

module.exports = router;
