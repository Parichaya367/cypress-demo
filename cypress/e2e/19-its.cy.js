describe('Its command', () => {
	it('String', () => {
		cy.visit('https://katalon-demo-cura.herokuapp.com/')
		cy.title().its('length').should('equal', 23)
	})
})
