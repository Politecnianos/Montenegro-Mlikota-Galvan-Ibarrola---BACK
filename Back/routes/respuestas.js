const express = require('express');
const router = express.Router();
const respuestasController = require('../controllers/respuestasController');
const validateToken = require('./validate-token')

router.get('/', validateToken, respuestasController.getAllRespuestas);
router.get('/:id', respuestasController.getRespuestaById);
router.post('/', respuestasController.createRespuesta);
router.put('/:id', respuestasController.updateRespuesta);
router.delete('/:id', respuestasController.deleteRespuesta);

module.exports = router;
