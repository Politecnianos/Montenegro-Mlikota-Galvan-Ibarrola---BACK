const express = require('express');
const router = express.Router();
const mensajesController = require('../controllers/mensajesController');
const validateToken = require('./validate-token')

router.get('/', validateToken, mensajesController.getAllMensajes);
router.get('/:id', mensajesController.getMensajeById);
router.post('/', mensajesController.createMensaje);
router.put('/:id', mensajesController.updateMensaje);
router.delete('/:id', mensajesController.deleteMensaje);

module.exports = router;
