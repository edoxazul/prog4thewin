/**
 *
 */


'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noticiaSchema = new Schema({
    titulo: {
        type: String,
        required: true,

    },
    fecha: {
        type: Number,
        require: true
    },
    cuerpo: {
        type: String,
        require: true

    },

    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario',
        require: true
    },
    foto: {
        type: String,

    },

    categoria: {
        type: String,
        require: true
    },
    tag: {
        type: String,
        require: true
    },
    comentarios: [{
        type: String,
    }]
});

module.exports = mongoose.model('noticia',noticiaSchema);