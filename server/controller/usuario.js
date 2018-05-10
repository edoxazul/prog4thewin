/**
 *  Created by Eduardo on 03/05/2018
 * */


'use strict';

const bcrypt =  require('bcrypt-nodejs');
const Usuario = require('../model/usuario');
const jwt = require('../services/jwt');

function iniciarsesion(req, res){
    const params = req.body;
    const rutMail = params.rutMail;
    const password = params.clave;

    Usuario.findOne({}).or([{rut: rutMail}, {email:rutMail}]).exec(function (err, usuario_encontrado) {
        if(err){
            res.status(500).send({
                desc: 'Error en el servidor',
                err: err.message
            })()
        }else{
            if (!usuario_encontrado){
                res.status(404).send({
                    desc: 'Usuario no encontrado'
                })
            } else{
                bcrypt.compare(password,usuario_encontrado.clave,function (err, check) {
                    if(check){
                        if (params.gettoken){
                            res.status(200).send({token: jwt.createToken(usuario_encontrado)})
                        }  else {
                            res.status(200).send(usuario_encontrado);
                        }
                    }else{
                        res.status(400).send({
                            desc: 'Contraseña incorrecta'
                        })
                    }
                })
            }
        }
    });

}

function guardarUsuario(req,res){
    const usuario = new Usuario();
    const params = req.body;

    usuario.nombre = params.nombre;
    usuario.rut = params.rut;
    usuario.correo = params.correo;
    usuario.direccion = params.direccion;
    usuario.clave = bcrypt.hashSync(params.password);
    usuario.avatar = 'default.jpg';
    usuario.nick = params.nick;
    const fecha = new Date(params.fechaNacimiento);
    usuario.fechaNacimiento = fecha;

    usuario.save((err,usuario_guardado) => {
        if(err){
            res.status(500).send({
                desc: 'Error en el sistema',
                err: err.message
            })
        }else{
            if(!usuario_guardado){
                res.status(404).send({
                    desc: ' Usuario no de guardo correctamente',

                })
            }else {
                res.status(200).send(usuario_guardado);
            }
        }
    })

}

module.exports = {
    iniciarsesion,
    guardarUsuario

};