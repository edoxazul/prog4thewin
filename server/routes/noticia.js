/**
 *
 */
'use strict';
const express = require('express');
const NoticiaController = require('../controller/noticia');
const midleware = require('../midleware/midleware');

const api = express.Router();

api.put('/crearNoticia',midleware.ensureAuth, NoticiaController.crearNoticia);
api.get('/getNoticia',midleware.ensureAuth, NoticiaController.getNoticia);
api.post('/modificarNoticia',midleware.ensureAuth, NoticiaController.modificarNoticia);
api.delete('/deleteNoticia',midleware.ensureAuth, NoticiaController.deleteNoticia);

module.exports = api;
