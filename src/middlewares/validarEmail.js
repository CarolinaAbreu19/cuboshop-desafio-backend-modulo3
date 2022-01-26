const { conexao } = require('../conexao');

const validarEmail = async (req, res) => {
    const { email } = req.body;

    try {
        const emailEncontrado = await conexao('usuarios').select('email').where({ email: email });
        if(emailEncontrado) {
            return res.status(400).json({ mensagem: "Já existe usuário cadastrado com o email informado" });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {validarEmail};