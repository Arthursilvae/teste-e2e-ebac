/// <reference types="cypress" />
import produtos from "../support/page_objects/produtos";
import {faker} from '@faker-js/faker';
const perfil = require('../fixtures/perfil.json')


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('produtos')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    produtos.buscarProdutos('Apollo Running Short') // procura o primeiro produto
    produtos.adicionarProdutosAoCarrinho() // adicionar 4 produtos ao carrinho
    cy.get('.woocommerce-message > .button').click() // abrir o carrinho
    cy.get('.checkout-button').click() // abrir o chekout
    cy.get('.showlogin').click()
    // Deve fazer login com Sucesso
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-button').click()
    // preenchendo as informações
    cy.get('#billing_address_1').clear().type(faker.location.street())
    cy.get('#billing_city').clear().type (faker.location.city())
    cy.get('#billing_postcode').clear().type ('59154275')
    cy.get('#billing_phone').clear().type ('99 99293999')
    cy.get('#order_comments').type ('adorei este exercicio!!')
    cy.get('#payment_method_cod').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
    // validação da compra
    cy.get('.woocommerce-notice').should('contain','Obrigado. Seu pedido foi recebido.')




     
    //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
      
  });


})