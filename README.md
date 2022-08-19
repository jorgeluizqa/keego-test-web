# keego-test-web

Instalação

Instalar o Node.js

Dentro da pasta do projeto use o comando: "npm init"

Para instalar o cypress use o comando: "npm i cypress --save-dev"

Para baixar as pastas do projeto use o comamdo: "npx cypress open"

Para configurar seu projeto para utilização do cucumber instale o seguinte plugin:

cypress-cucumber-preprocessor

Instalação: npm install -D cypress-cucumber-preprocessor

Configuração do Cypress: Adicione o trecho abaixo no arquivo de plugins:

cypress/plugins/index.js

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => { on('file:preprocessor', cucumber()) } Adicione o suporte a arquivos de feature em sua configuração do Cypress:

cypress.json

{ "testFiles": "**/*.feature" }

Configuração: Por favor, faça uso de cosmiconfig para criar uma configuração para o plugin, por exemplo, adicionando a seção abaixo ao seu package.json:

"cypress-cucumber-preprocessor": { "nonGlobalStepDefinitions": true }

Para executar os testes no Browser use o comando: "npx cypress open"

Para executar os testes headless use o comando: "npx cypress run"
