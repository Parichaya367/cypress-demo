describe('Environment Variables', () => {
	it('Verify env variable in config file', () => {
		cy.log(Cypress.env('URL'))
		cy.log(Cypress.env('USERNAME'))
		cy.log(Cypress.env('PWD'))
	})
})
