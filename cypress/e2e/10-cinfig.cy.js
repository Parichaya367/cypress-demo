describe('Config in runtime', () => {
	it('Set config file', () => {
		Cypress.config({
			defauktCommandTimeout: 30000,
			pageLoadTimeout: 300000,
		})

		cy.log(Cypress.config('defaultCommandTimeout'))
	})
})
