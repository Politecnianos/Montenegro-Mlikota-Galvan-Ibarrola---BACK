const express = require('express');
const router = express.Router();
const respuestasController = require('../controllers/respuestasController');
const validateToken = require('./validate-token')

router.get('/', validateToken, respuestasController.getAllRespuestas);
router.get('/:id', validateToken, respuestasController.getRespuestaById);
router.post('/', validateToken, respuestasController.createRespuesta);
router.put('/:id', validateToken, respuestasController.updateRespuesta);
router.delete('/:id', validateToken, respuestasController.deleteRespuesta);

module.exports = router;
