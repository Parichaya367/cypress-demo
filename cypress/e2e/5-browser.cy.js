describe('Browser command', () => {
	it('Browser', () => {
		cy.visit('http://example.cypress.io')

		cy.title().should('equal', 'Cypress.io: Kitchen Sink')

		cy.url().should('contain', 'cypress')

		cy.location('protocol').should('equal', 'https:')

		cy.reload()

		cy.go('back')

		cy.go('forward')

		cy.clearCookies() // for mamny pages
		// cy.clearCookie() // for one page

		cy.clearLocalStorage()

		cy.viewport('samsung-s10', 'portrait')

		//cy.pause(10)
	})
})
