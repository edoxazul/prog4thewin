/**
 *
 * Created By Eduardo on 09/05/2018
 */
'use strict';

const jwt = require('jwt-simple');
const moment = require('moment');
const  claveSecreta = process.env.clave || 'CLAVE';

exports.createToken = function (usuario) {
    const payload={
        id: usuario.id,
        rut: usuario.rut,
        correo: usuario.correo,
        direccion: usuario.direccion,
        nick: usuario.nick,
        fechaNacimiento: usuario.fechaNacimiento,
        iat: moment().unix(),
        exp: moment().add(10, 'hours').unix(),
    };
    return jwt.encode(payload,claveSecreta);
};