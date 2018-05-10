'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noticiasSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    fecha:{
        type:Date,
        required: true
    },
    cuerpo:{
        type: String,
        required: true
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    comentarios: [{
        type:String,
    }]
    
});