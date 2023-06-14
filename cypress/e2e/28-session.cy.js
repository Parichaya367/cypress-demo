describe('Session command', () => {
	beforeEach(() => {
		cy.session('login', () => {
			cy.visit('https://katalon-demo-cura.herokuapp.com/')
			cy.get('#btn-make-appointment').click()
			cy.get('#txt-username').type('John Doe')
			cy.get('#txt-password').type('ThisIsNotAPassword')
			cy.get('#btn-login').click()
		})

		cy.visit('https://katalon-demo-cura.herokuapp.com/#appointment')
	})
	it('Can login with valid user', function () {
		cy.get('#btn-book-appointment').should('exist')
	})

	it('Can login with valid user', function () {
		cy.get('#txt_comment').should('exist')
	})
})
