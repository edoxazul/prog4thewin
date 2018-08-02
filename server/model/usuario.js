/**
 * Created by Eduardo on 03/05/2018
 */

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    rut:{
        type:String,
        required: true,
        unique: true
    },
    correo:{
        type: String,
        required: true,
        unique: true
    },
    direccion:{
        type: String,
        required: true
    },
    clave:{
        type: String,
        required: true

    },
    avatar:{
        type: String,
        required: true
    },
    nick:{
        type: String,
        required: true
    },
    fechaNacimiento:{
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('usuario', usuarioSchema);
