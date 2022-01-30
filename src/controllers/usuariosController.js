const conexao = require('../conexao');
const validarEmail = require('../middlewares/validarEmail');
const validarUsuario = require('../middlewares/validarUsuario');
const bcrypt = require('bcrypt');
const webToken = require('jsonwebtoken');
const senhaToken = require('./senhaToken');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;

    
    try {
        const erroDados = await validarUsuario(req);         
        if(erroDados) {
            return res.status(400).json({ mensagem: erroDados });
        }

        const erroEmail = await validarEmail(req);
        if(erroEmail) {
            return res.status(400).json({ mensagem: erroEmail });
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const novoUsuario = await conexao('usuarios').insert({
            nome: nome,
            email: email,
            senha: senhaCriptografada,
            nome_loja: nome_loja
        });

        return res.status(201).json();
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    cadastrarUsuario
}