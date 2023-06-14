describe('Fixture command', () => {
	beforeEach(() => {
		cy.visit('https://katalon-demo-cura.herokuapp.com/')
		cy.fixture('mydata.json').as('data')
	})
	it('Extract data from fixture file', function () {
		cy.get('#btn-make-appointment').click()
		cy.get('#txt-username').type(this.data.USERNAME)
		cy.get('#txt-password').type(this.data.PASSWORD)
	})

	it('Cannot login with invalid user', function () {
		cy.visit('https://katalon-demo-cura.herokuapp.com/')
		cy.get('#btn-make-appointment').click()
		cy.get('#txt-username').type(this.data.INVALID_USERNAME)
		cy.get('#txt-password').type(this.data.PASSWORD)
	})

	it('Cannot login with invalid user', function () {
		cy.visit('https://katalon-demo-cura.herokuapp.com/')
		cy.get('#btn-make-appointment').click()
		cy.get('#txt-username').type(this.data.USERNAME)
		cy.get('#txt-password').type(this.data.INVALID_PASSWORD)
	})
})
