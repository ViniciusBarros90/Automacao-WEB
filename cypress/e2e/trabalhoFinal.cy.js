/// <reference types="cypress" />

import userData from '../fixtures/example.json'     
import { getRandomEmail } from "../support/helpers.js"
import { faker } from '@faker-js/faker';
import menu from '../modules/menu'; 
import login from '../modules/login';
import cadastro from '../modules/cadastro';
import contato from '../modules/contato';
import produto from '../modules/produto';  
import carrinho from '../modules/carrinho';  
import checkout from '../modules/Checkout';
import pagamento from '../modules/Pagamento';


describe('Trabalho final', () => {

    let email;
    const senha = userData.pass;
    const urlBase = 'https://automationexercise.com/'

    before(() => {
        email = getRandomEmail();
        cy.visit(urlBase);
        menu.navegarParaOMenuSignupLogin();
        login.preencherFormularioNewUserSignup(email);
        cadastro.preencherFormularioDeCadastroCompleto(senha);
        cadastro.clicarNoBotãoContinuar();
        menu.efetuarLogout();
    });

    beforeEach(() => {
        cy.visit(urlBase)
     });


    it('Login com email e senha corretas', () => {
        menu.navegarParaOMenuSignupLogin()
        login.PreencherOFormularioLoginToYourAccount(email, senha)

       //Assertions 
        cy.contains('Logged in as ')
        cy.get('a[href="/logout"]').should('contain', 'Logout');               
    });

    it('Login com email e senha incorreta', () => {
        menu.navegarParaOMenuSignupLogin()
        login.PreencherOFormularioLoginToYourAccount(email, 'senhaerrada')

        //Assert
        cy.contains('Your email or password is incorrect!')
        cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!');            
    });

    it('Logout', () => {
        menu.navegarParaOMenuSignupLogin()

        login.PreencherOFormularioLoginToYourAccount(email, senha)

        //Act
        menu.efetuarLogout()
        
        //Assert
        cy.url().should('include', '/login')
        cy.get('a[href="/logout"]').should('not.exist');
        cy.get('a[href="/login"]').should('contain', 'Signup / Login');


    });

    it('Registrar um usuário com email existente', () => {
        menu.navegarParaOMenuSignupLogin()
        login.registrarUmUsuarioComEmailExistente(userData.name, email )

        //Assert
        cy.contains('Email Address already exist!').should('be.visible');
        cy.get('.signup-form > form > p').should('contain', 'Email Address already exist!');       
   
    });

    it('Preencher o formulário de contato', () => {
        contato.PreencherOFormularioDeContato()

        //Assert
        cy.get('.status').should('be.visible')
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')
             

    });

    it('Verificar todos os produtos e a página de detalhes do produto', () => {
       menu.navegarParaOMenuProduto()
        //Assert
        cy.url().should('include', '/products')
        cy.get('h2[class="title text-center"]').should('contain', 'All Products');

        produto.clicarVisualizarProduto()
        //Assert
        cy.url().should('include', 'product_details/1')
        cy.contains('h2', 'Blue Top').should('be.visible');
        cy.contains('p', 'Category: Women > Tops');
        cy.contains('span', 'Rs. 500').should('be.visible')
        cy.contains('b', 'Availability:').should('be.visible')
        cy.contains('b', 'Condition:').should('be.visible')
        cy.contains('b', 'Brand:').should('be.visible')            
             
    });

    it('Pesquisar produto', () => {
        menu.navegarParaOMenuProduto()
        //Assert
        cy.url().should('include', '/products')
        cy.get('h2[class="title text-center"]').should('contain', 'All Products');

        produto.preencherCampoDePesquisaDeProduto()  
        produto.clicarNaLupadePesquisa()  
        //Assert
        cy.contains('Searched Products')
        cy.get('h2[class="title text-center"]').should('contain', 'Searched Products');
        cy.contains('p', 'Winter Top');

             
    });

    it('Verificar Subscrição na página Inicial', () => {
        menu.navegarParaOMenuProduto()
        //Assert
        cy.contains('h2', 'Subscription');

        produto.preencherEmailNoSubscricao()
        produto.clicarNoBotaoPesquisarSubscricao()

        //Assert
        cy.get('.alert-success') 
        .should('be.visible')
        .and('contain', 'You have been successfully subscribed!');              
            
    });    

    it('RegistrarAntesEFazerPedido', () => {
        menu.navegarParaOMenuSignupLogin()
        login.preencherFormularioNewUserSignup(faker.internet.email())
        cadastro.preencherFormularioDeCadastroCompleto(senha)
        cadastro.clicarNoBotãoContinuar()
        menu.navegarParaOMenuProduto()
        produto.clicarEmAdicionarProdutoNoCarrinho()
        produto.clicarEmVisualizarCarrinho()
        //Assert
         cy.url().should('include', '/view_cart')
         cy.contains('li', 'Shopping Cart');

        carrinho.ClicarNoBotaofazerCheckout();
        //Assert
         cy.url().should('include', '/checkout')
         cy.contains('li', 'Checkout');
        checkout.campoComentario()
        checkout.clicarNoBotãoPlaceOrder()
        pagamento.PreencherDadosDoCartao()

        //Assert
        cy.contains('p', 'Congratulations! Your order has been confirmed!');
    });
        
    after(() => {
        menu.efetuarLogout()
        cy.visit('https://automationexercise.com/')
        menu.navegarParaOMenuSignupLogin()
        login.PreencherOFormularioLoginToYourAccount(email, senha)

        menu.DeletarConta()
        //Assert
        cy.contains('Account Deleted!').should('be.visible');        
    })
  

});
    