# backend-desafio-equitem

## Sobre
Projeto backend desenvolvido para o desafio de programação para a vaga de Estagiário da empresa Equitem. A aplicação consiste numa API que realiza busca de CNPJs através da API pública [Receita WS](https://receitaws.com.br/). O usuário tem a possibilidade de gravar as informações obtidas em um banco de dados PostgreSQL. 

### Tecnologias Utilizadas
- Node
- Express
- PostgreSQL
- Axios
- Sequelize

## Pré-Requisitos
- É necessário ter o Node.js instalado na máquina para rodar o projeto. 
- É necessário ter um banco de dados PostgreSQL instalado localmente para a gravação e leitura.

### Rodando o backend
$ git clone [este projeto]

### Instale as dependências
$ npm install
$ Altere as variaveis de ambiente no arquivo "db.js" para seu Banco de Dados PostgreSQL local.

### Execute a aplicação
$ node index.js

### O servidor iniciará na porta:3000 - Acesse [localhost:3000](localhost:3000)

### Features
- [X]Busca de CNPJ através do Webservice Receita WS.
- [X]Gravação do CNPJ no Banco de Dados.
- [X]Listar todos os CNPJs salvos no Banco de Dados.
- [X]Deletar um CNPJ do Banco de Dados.





