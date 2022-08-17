
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
