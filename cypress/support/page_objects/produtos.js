class produtos {
    buscarProdutos(nomeProduto) {
        cy.get('.products > .row')
        .contains (nomeProduto) 
        .click() 

    }

    adicionarProdutosAoCarrinho() {
        cy.get('.button-variable-item-32').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear() .type(4)
        cy.get('.single_add_to_cart_button').click()
    }
}
export default new produtos()