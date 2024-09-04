COMANDOS MYSQL
Usaremos a tabela usuario como exemplo
mysql -h localhost -u root -p; -- Para acessar o mysql pelo terminal
/* -h localhost identifica qual servidor do banco de dados você quer acessar */
/* -u root identifica o usuario root */
/* -p significa que entrará por senha */

SHOW DATABASES; -- Comando mostra as tabelas do servidor logado
CREATE DATABASE nomeDoBanco; -- Cria um novo banco de dados
USE nomeDoBanco; -- Acessa o banco de dados especificado
SHOW TABLES; -- Mostra as tabelas presentes no banco de dados atual
CREATE TABLE usuarios() -- Cria a tabela usuarios, as colunas são especificadas dentro do parenteses
/* EXEMPLO */
CREATE TABLE usuarios(
    nome VARCHAR(50), -- Especifica a criação de uma coluna do tipo VARCHAR com maximo de 50 caracteres por célula
    email VARCHAR(100), -- Cria a coluna email tipo varchar
    idade INT --Cria uma coluna idade com valor inteiro
);

DESCRIBE usuarios --Mostra os Detalhes da tabela especificada

COMANDOS DE MANIPULAÇÃO DE DADOS
INSERT INTO usuarios()--Usado para inserir dados na tabela, INSERT usado para inserir INTO usado para especificar qual tabela
/* EXEMPLO */
INSERT INTO usuarios(
    nome, email, idade -- Especifica que quer inserir dados nas colunas nome, email e idade
) VALUES( -- Usado para descrever os valores a serem inseridos
    "Victor Lima", -- Irá para o valor em Nome
    "emailTeste@teste.com", -- Irá para o valor em email
    8 -- Irá para o valor em idade
)

SELECT --Usado para selecionar dados da tabela
SELECT * -- Seleciona todos os dados da tabela
FROM -- Usado para especificar qual tabela sofrerá uma ação

/* EXEMPLO */

SELECT * FROM usuarios -- Seleciona todos os dados da tabela usuarios

WHERE -- Especifica uma busca por parametros Especificos

/* EXEMPLO */

SELECT * FROM usuarios WHERE idade = 8 --Seleciona todos as linhas da tabela usuario onde a coluna idade é igual a 8