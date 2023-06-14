describe('Custom Command', () => {
	beforeEach(() => {
		cy.visit('https://katalon-demo-cura.herokuapp.com/')
	})
	it('Can login with valid user and password', () => {
		const username = 'John Doe'
		const password = 'ThisIsNotAPassword'
		cy.login(username, password)
		// Assertion
		cy.get('#btn-book-appointment').should('exist')
	})

	it('Can not login with invalid user', () => {
		const username = 'Jake Shim'
		const password = 'ThisIsNotAPassword'
		cy.login(username, password)
		// Assertion
		cy.get(
			'#login > div > div > div.col-sm-12.text-center > p.lead.text-danger'
		).should('exist')
	})

	it('Can not login with invalid password', () => {
		const username = 'John Doe'
		const password = 'DontKnowWhatToDo'
		cy.login(username, password)
		// Assertion
		cy.get(
			'#login > div > div > div.col-sm-12.text-center > p.lead.text-danger'
		).should('exist')
	})
})
