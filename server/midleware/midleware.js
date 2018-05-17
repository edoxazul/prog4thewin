/**
 *
 */

'use strict' ;

const jwt = require ('jwt-simple');
const moment = require('moment');
const Usuario = require('../model/usuario')
const claveSecreta = process.env.clave || 'CLAVE';

function ensureAuth(req ,res,next){
    if(!req.headers.autorization){
        return res.status(401).send({
            desc: 'La peticion no tiene head!!'
        })
    }
    const token = req.headers.autorization.replace(/['CLAVE"]/g, '');
    let payload;

    try{
        payload = jwt.decode(token, claveSecreta);

        if (payload.id && payload.exp <= moment().unix()){
            return res.status(403).send({
                desc: 'El token no es valido'
            })
        }

        Usuario.findOne({_id: payload.id}, (err,usuario_encontrado) => {
            if (err){
                res.status(500).send({
                    desc: 'Error de servidor',
                    err: err.message
                })
            }else{
                if(!usuario_encontrado){
                    res.status(404).send({
                        desc: 'Usuario no existe',
                    })
                }else{
                    req.usuario = payload;
                    next();
                }
            }
        });

    } catch (e) {
        return res.status(403).send({
            desc: 'Error en el servidor',
            err: e.message
        })

    }

}
module.exports = {
    ensureAuth
};