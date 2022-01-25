DROP DATABASE IF EXISTS cuboshop;
CREATE DATABASE cuboshop;

CREATE TABLE IF NOT EXISTS usuarios(
  id SERIAL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  nome_loja VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  senha text NOT NULL
);

CREATE TABLE IF NOT EXISTS produtos(
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER NOT NULL,
  nome VARCHAR(50) NOT NULL,
  quantidade INTEGER NOT NULL,
  categoria VARCHAR(50),
  preco REAL NOT NULL,
  descricao VARCHAR(255),
  imagem TEXT,
  FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);