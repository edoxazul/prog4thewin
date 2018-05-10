/**
 * Created by Tomás on 17-04-2018.
 */
'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 8000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://@localhost:27017/portalweb', {useMongoClient: true})
    .then(() => {
        console.log('La conexion a la base de datos se a realizado Correctamente');
        app.listen(port, () => {
            console.log('El servidor esta corriendo en el puerto: 8000')
        })
    })
    .catch(err => console.log(err));
