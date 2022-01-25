const conexao = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : 'postgres',
      database : 'cuboshop'
    }
});

module.exports = conexao;