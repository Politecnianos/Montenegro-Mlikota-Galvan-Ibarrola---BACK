const express = require('express');
const router = express.Router();
const alumnosController = require('../controllers/alumnosController');
const validateToken = require('./validate-token')

router.get('/', validateToken, alumnosController.getAllAlumnos);
router.get('/mail/:mail', alumnosController.getDniByMail);
router.get('/:id', alumnosController.getAlumnoById);
router.post('/', alumnosController.createAlumno);
router.post('/login', alumnosController.loginUser)
router.put('/:id', alumnosController.updateAlumno);
router.delete('/:id', alumnosController.deleteAlumno);

module.exports = router;
