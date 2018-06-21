/**
 *
 */
'use strict';
const express = require('express');
const NoticiaController = require('../controller/noticia');
const midleware = require('../midleware/midleware');

const api = express.Router();

api.post('/crearNoticia',midleware.ensureAuth, NoticiaController.crearNoticia);
api.post('/getNoticia',midleware.ensureAuth, NoticiaController.getNoticia);
api.post('/modificarNoticia',midleware.ensureAuth, NoticiaController.modificarNoticia);

module.exports = api;
