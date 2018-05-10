'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noticiasSchema = new Schema({
    titulo: {
        type: String,
        require: true
    },
    fecha: {
        type: date,
        require: true
    },
    cuerpo: {
        type: String,
        require: true
    },
    autor: {
        type: String,
        require: true
    },
    foto: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    tag: {
        type: String,
        require: true
    },

    usuario: {
        type: mongoose.schema.types.objectId,
        require: true
    },
    comentarios: [{
        type: String,
    }]
});