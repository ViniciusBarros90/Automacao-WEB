class menu {
    
    navegarParaOMenuSignupLogin() {
        cy.get('a[href="/login"]').click()
    }

    efetuarLogout() {
        cy.get('a[href="/logout"]').click()
    }

    DeletarConta(){
        cy.get('a[href="/delete_account"]').click()
        
    }

    navegarParaOMenuProduto(){
         cy.get('a[href="/products"]').click()
    }


}

export default new menu();