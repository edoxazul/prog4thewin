/**
 * Created By Eduardo on 10/05/2018
 */
'use strict';

const Noticia = require('../model/noticia');

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

    noticia.save((err, noticia_guardada) => {
        if(err){
            res.status(500).send({
                desc: 'Error en el servidor',
                err: err.message
            })
        }else {
            if(!noticia_guardada) {
                res.status(404).send({
                    desc:'Noticia no guardada'
                })
            }else {
                res.status(200).send(noticia_guardada);
            }

        }
    })
}

module.exports = {
    crearNoticia
};