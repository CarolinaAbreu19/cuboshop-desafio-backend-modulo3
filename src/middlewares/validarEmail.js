const conexao = require('../conexao');

const validarEmail = async (req) => {
    const { email } = req.body;

    try {
        const emailEncontrado = await conexao('usuarios').select('email').where({ email: email });
        if(emailEncontrado.length > 0) {
            return  "Já existe usuário cadastrado com o email informado";
        } 
        
        return;

    } catch (error) {
        return error;
    }
}

module.exports = validarEmail;