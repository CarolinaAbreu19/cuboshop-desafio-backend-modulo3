const validarUsuario = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;

    if(!nome) {
        return res.status(400).json({ mensagem: "O campo nome é obrigatório" });
    }

    if(!email) {
        return res.status(400).json({ mensagem: "O campo email é obrigatório" });
    }

    if(!senha) {
        return res.status(400).json({ mensagem: "O campo senha é obrigatório" });
    }

    if(!nome_loja) {
        return res.status(400).json({ mensagem: "O campo nome_loja é obrigatório" });
    }
}
module.exports = {validarUsuario};