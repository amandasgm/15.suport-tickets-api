🎫 Suport Tickets API

API de gerenciamento de tickets de suporte, desenvolvida em Node.js, com foco em modularidade, organização de código e boas práticas de arquitetura.

✨ Sobre o Projeto

Este projeto tem como objetivo fornecer uma API simples e escalável para gerenciamento de tickets de suporte.

A API está estruturada em módulos claros:
- Controllers: Lógica para criação, atualização e listagem de tickets.
- Database: Simulação de banco de dados utilizando JSON para persistência.
- Middlewares: Tratamento do corpo da requisição (JSON) e gerenciamento de rotas.
- Routes: Definição das rotas disponíveis.
- Utils: Funções auxiliares para suporte às operações.
- Server: Inicialização do servidor e integração dos módulos.

🛠️ Tecnologias Utilizadas

Node.js – Ambiente de execução JavaScript no servidor
JavaScript (ESM) – Estrutura modular e organizada
JSON – Persistência de dados local (db.json)
HTTP nativo do Node – Sem frameworks externos, construído do zero
Middlewares customizados – Para parsing de JSON e roteamento manual

📂 Estrutura de Pastas:
src/
 ┣ controllers/tickets/
 ┃ ┣ create.js       # Criação de tickets
 ┃ ┣ index.js        # Listagem de tickets
 ┃ ┗ update.js       # Atualização de tickets
 ┣ database/
 ┃ ┣ database.js     # Funções de acesso ao "banco"
 ┃ ┗ db.json         # Banco de dados simulado em JSON
 ┣ middleware/
 ┃ ┣ jsonHandler.js  # Middleware para parse de JSON
 ┃ ┗ routeHandler.js # Middleware para rotas
 ┣ routes/           # Definição das rotas da API
 ┣ utils/            # Funções auxiliares
 ┣ server.js         # Inicialização do servidor
 ┗ package.json

📌 Funcionalidades

- Criar novo ticket de suporte
- Listar tickets existentes
- Atualizar status ou informações de um ticket
- Persistência em arquivo db.json

Ensinando por Rocketseat e aplicado por Amanda Santana