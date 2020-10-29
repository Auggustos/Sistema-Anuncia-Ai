'use strict'
const cors = require('cors');
const express = require('express');


const app = express();
const router = express.Router();

//Carrega as Rotas
const indexRoute = require('./routes/index-route.js');
const productRoute = require('./routes/product-route.js');
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());


app.use('/', indexRoute);
app.use('/products', productRoute);


module.exports = app;