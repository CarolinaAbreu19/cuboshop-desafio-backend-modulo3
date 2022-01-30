const validarUsuario = async (req) => {
    const { nome, email, senha, nome_loja } = req.body;

    if(!nome) {
        return "O campo nome é obrigatório";
    } 
    
    if(!email) {
        return "O campo email é obrigatório";
    }

    if(!senha) {
        return "O campo senha é obrigatório";
    }

    if(!nome_loja) {
        return "O campo nome_loja é obrigatório";
    }

    return;
}
module.exports = validarUsuario;