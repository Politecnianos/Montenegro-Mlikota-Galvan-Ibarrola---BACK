const express = require('express');
const router = express.Router();
const respuestasController = require('../controllers/respuestasController');

router.get('/', respuestasController.getAllRespuestas);
router.get('/:id', respuestasController.getRespuestaById);
router.post('/', respuestasController.createRespuesta);
router.put('/:id', respuestasController.updateRespuesta);
router.delete('/:id', respuestasController.deleteRespuesta);

module.exports = router;
