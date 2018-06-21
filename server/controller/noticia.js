/**
<<<<<<< HEAD
 *  Created by Julio, Eduardo, Joyce, Franz on 10/05/2018
 * */
'use strict';

const Noticia = require('../model/noticia');

function crearNoticia(req,res) {
    const params = req.body;

    const noticia = new Noticia();

    noticia.titulo = params.titulo;
    noticia.fecha = params.fecha;
    noticia.cuerpo = params.cuerpo;
    noticia.autor = params.autor;
    noticia.categoria = params.categoria;
    noticia.tag = params.tag;

    Noticia.save((err, noticia_guardada) => {
        if(err){
            res.status(500).send({
                desc: 'Error en el servidor',
                err: err.message
            })
        }else {
            if(!noticia_guardada) {
                res.status(404).send({
                    desc:'Noticia no guardada',
                })
            }else {
                res.status(200).send(noticia_guardada);
            }
        }
    })
}

function getNoticia(req,res){

    const idNoticia=req.params.id;

    Noticia.findOne({_id:idNoticia},(err,noticia_encontrada)=>{

        if(err){
            res.status(500).send({
                desc: 'Error en el servidor',
                err: err.message
            })
        }else{
            if(!noticia_encontrada){
                res.status(404).send({
                    desc: 'Noticia no encontrada',
                    err: err.message
                })
            }else{
                res.status(200).send(noticia_encontrada);
            }
        }
    })
}

function modificarNoticia(req,res){

    const idNoticia=req.params.id;

    Noticia.findOne({_id:idNoticia},(err,noticia_modificada)=>{

        if(err){
            res.status(500).send({
                desc: 'Error en el servidor',
                err: err.message
            })
        }else{
            if(!noticia_modificada){
                res.status(404).send({
                    desc: 'Noticia no encontrada',
                    err: err.message
                })
            }else{

                noticia_modificada.titulo = params.titulo;
                noticia_modificada.fecha = params.fecha;
                noticia_modificada.cuerpo = params.cuerpo;
                noticia_modificada.autor = params.autor;
                noticia_modificada.categoria = params.categoria;
                noticia_modificada.tag = params.tag;

                noticia_modificada.save((err, noticia_modificada) => {
                    if(err){
                        res.status(500).send({
                            desc: 'Error en el servidor',
                            err: err.message
                        })
                    }else {
                        if(!noticia_modificada) {
                            res.status(404).send({
                                desc:'Noticia no guardada'
                            })
                        }else {
                            res.status(200).send(noticia_modificada);
                        }
                    }
                })
            }
        }
    })
}

module.exports = {
    crearNoticia,
    getNoticia,
    modificarNoticia,

};

