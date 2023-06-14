describe('Assertion', () => {
	beforeEach(() => {
		cy.visit('https://example.cypress.io/commands/actions')
	})
	it.only('', () => {
		const expectedEmail = 'example@email.com'
		cy.get('#email1').type(expectedEmail).should('have.value', expectedEmail)
		cy.get('#email1').should('have.class', 'form-control action-email')
		cy.get('#email1').should('have.attr', 'placeholder', 'Email')
		cy.get('#email1').should('be.visible')
		cy.get('#email1').should('exist')
		cy.get(
			'#actions > div > div:nth-child(2) > div > form > div:nth-child(2) > label'
		).should('have.text', 'Disabled Textarea')
		cy.get(
			'#actions > div > div:nth-child(26) > div > div.action-checkboxes > div:nth-child(1) > label > input[type=checkbox]'
		)
			.click()
			.should('be.checked')
		cy.get('.form-control.action-select')
			.select('fr-bananas')
			.should('have.value', 'fr-bananas')

		cy.get('[value="fr-bananas"]').should('be.selected')

		cy.get('input').should('have.length', 20)
	})
})
