import userData from '../../fixtures/example.json';

class Pagamento {
    PreencherDadosDoCartao(){
        cy.get('[data-qa="name-on-card"]').type(userData.name);
        cy.get('[data-qa="card-number"]').type(12345678912345678);
        cy.get('[data-qa="cvc"]').type(123);
        cy.get('[data-qa="expiry-month"]').type(12);
        cy.get('[data-qa="expiry-year"]').type(2025);
        cy.get('[data-qa="pay-button"]').click();
    }

}

export default new Pagamento();