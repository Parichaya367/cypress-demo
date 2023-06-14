const cypress = require('cypress')

describe('Origin Command', () => {
	it('Cross origin', () => {
		cypress.on('uncaught:exception', (err, runnable) => {
			return false
		})
		cy.visit('httpa://www.cypress.io')

		cy.origin('https:www.apple.com/', () => {
			cy.visit('/')
			cy.get('#[aria-label="Store"]').click()
		})
	})
})
