
class Checkout {

    campoComentario() {
        cy.get('textarea[class="form-control"]').type('Teste de automação');
    }

    clicarNoBotãoPlaceOrder() {
        cy.get('a[class="btn btn-default check_out"]').should('have.text', 'Place Order').click();      
    }


}

export default new Checkout();