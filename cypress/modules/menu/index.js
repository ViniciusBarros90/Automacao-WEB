class menu {
    
    navegarParaOMenuSignupLogin() {
        cy.get('a[href="/login"]').should('exist').click()
    }

    efetuarLogout() {
        cy.get('a[href="/logout"]').should('exist').click()
    }

    DeletarConta(){
        cy.get('a[href="/delete_account"]').should('exist').click()
        
    }

    navegarParaOMenuProduto(){
         cy.get('a[href="/products"]').should('exist').click()
    }


}

export default new menu();