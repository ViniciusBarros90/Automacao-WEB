
class Carrinho {
    ClicarNoBotaofazerCheckout(){
        cy.get('a.btn.btn-default.check_out').should('have.text', 'Proceed To Checkout').click();
            
    }
}
export default new Carrinho();