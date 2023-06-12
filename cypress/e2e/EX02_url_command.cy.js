describe('Url Command', () => {
	it('Url', () => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.title().should('equal', 'Zero - Personal Banking - Loans - Credit Cards')
		cy.location('protocol').should('equal', 'http:')
		cy.url().should('contain', 'index.html')
		cy.reload
	})
})

describe('Device tet', () => {
	it('Device', () => {
		cy.visit('http://www.example.com')
		cy.viewport(1080, 400)
		cy.viewport('iphone-6')
		cy.viewport('iphone-6', 'landscape')
	})
})
