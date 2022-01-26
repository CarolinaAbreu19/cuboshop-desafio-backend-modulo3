const express = require('express');
const routes = express();
const produtos = require('./controllers/produtosController');
const usuarios = require('./controllers/usuariosController');

routes.post('/usuario', usuarios.cadastrarUsuario);

module.exports = routes;