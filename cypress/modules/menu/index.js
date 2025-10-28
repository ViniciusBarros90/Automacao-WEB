class menu {
    
    navegarParaOMenuSignupLogin() {
       cy.get('a[href="/login"]').should('be.visible').click()

    }

    efetuarLogout() {
        cy.get('a[href="/logout"]').should('be.visible').click()
    }

    DeletarConta(){
        cy.get('a[href="/delete_account"]').should('be.visible').click()

    }

    navegarParaOMenuProduto(){
         cy.get('a[href="/products"]').should('be.visible').click()
    }


}

export default new menu();