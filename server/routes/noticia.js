/**
 *
 */
'use strict';
const express = require('express');
const NoticiaController = require('../controller/noticia');

const api = express.Router();
api.post('/crearNoticia', NoticiaController.crearNoticia);
module.exports = api;
