/**
 * Created By Eduardo on 10/05/2018
 */
'use strict';

const Noticia = require('../model/noticia');
const Visita = require()

function crearNoticia(req,res) {

    const params = req.body;
    const noticia = new Noticia();

    noticia.titulo = params.titulo;
    noticia.fecha = params.fecha;
    noticia.cuerpo = params.cuerpo;
    noticia.autor = params.autor;
    noticia.foto = params.foto;
    noticia.categoria = params.categoria;
    noticia.tag = params.tag;
    noticia.usuario = params.usuario;
    noticia.comentarios = params.comentarios;

}