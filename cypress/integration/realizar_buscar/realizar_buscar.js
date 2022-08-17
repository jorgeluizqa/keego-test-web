
var info ={
    username:'teste2021@teste.com.br',
    password:'teste'
}


Given(/^que acesso a página de login$/, () => {
	cy.visit('/')
    cy.get('.login').click()
});

When(/^informo os meus dados$/, () => {
	cy.get(':nth-child(1) > label').type(info.username)
    cy.get('#passwd').type(info.password)
    cy.get('#SubmitLogin > span').click()
});

Then(/^sou direcionado para a catálogo de produtos$/, () => {
	cy.get('.lnk_wishlist > a > span').should('have.text','My wishlists')
});


Given(/^que seleciono os produtos desejados$/, () => {
	cy.get('.sf-menu > :nth-child(3) > a').click()
});

When(/^incluo os mesmos no carrinho$/, () => {
	cy.get('.top-pagination-content > .compare-form > .btn > span').click()
    cy.get('.ajax_add_to_cart_button > span').click()
    cy.get('.button-medium > span').click()
    
});


Then(/^verifico na pagina de pagamentos se o produto selecionado está correto$/, () => {
	cy.get('.cart_navigation > .button > span').click()
    cy.get('.cart_navigation > .button > span').click()
    cy.get('#cgv').click()
    cy.get('.cart_navigation > .button > span').click()
	cy.get('.cart_description > .product-name > a').should('have.text', 'Faded Short Sleeve T-shirts')
    cy.get('#total_price').should('have.text', '$18.51')
});

    

