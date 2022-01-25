const express = require('express');
const routes = express();
const produtos = require('./controllers/produtosController');
const usuarios = require('./controllers/usuariosController');

module.exports = routes;