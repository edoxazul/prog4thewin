/**
 * Created by Tomás on 17-04-2018.
 */
'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const cookie = require('cookie-parser');

const jwt = require('jwt-simple');
const moment = require('moment');

const app = express();
app.use(cors());

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");

    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Allow', 'GET, POST, OPTION, PUT, DELETE');

    next();
});

//middleware bodyparser (Para que es necesario?)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cargar rutas

const usuario_routes = require('./server/routes/usuario');
const noticia_routes = require('./server/routes/noticia');

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

//Ruta Base

app.use('/api/usuario',usuario_routes);
app.use('/api/noticia',noticia_routes);


// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//rutas body-parser
module.exports = app;