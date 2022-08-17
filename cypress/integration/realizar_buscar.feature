
Feature: Realizar compras

 Como usuário logado no site my store, desejo
 selecionar os produtos desejados e incluir os mesmos
 no carrinho.

Background: Fazer login

 Given que acesso a página de login
 When informo os meus dados
 Then sou direcionado para a catálogo de produtos

Scenario: Selecionar os produtos

 Given que seleciono os produtos desejados
 When incluo os mesmos no carrinho
 Then verifico na pagina de pagamentos se o produto selecionado está correto

