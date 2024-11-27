const express = require('express');
const router = express.Router();
const mensajesController = require('../controllers/mensajesController');
const validateToken = require('./validate-token')

router.get('/', validateToken, mensajesController.getAllMensajes);
router.get('/:id', validateToken, mensajesController.getMensajeById);
router.post('/', validateToken, mensajesController.createMensaje);
router.put('/:id', validateToken, mensajesController.updateMensaje);
router.delete('/:id', validateToken, mensajesController.deleteMensaje);

module.exports = router;
