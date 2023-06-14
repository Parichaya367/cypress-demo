describe('Locate Element', () => {
	beforeEach(() => {
		cy.visit('https://katalon-demo-cura.herokuapp.com/')
	})

	it('Get and alias', () => {
		cy.get('#btn-make-appointment').as('btn_make_appointment')
		cy.get('@btn_make_appointment').should('exist')
		cy.get('@btn_make_appointment').click()
	})

	it('Contain', () => {
		cy.contains('Make Appointment').should('exist')
	})

	it('Relative node', () => {
		cy.get('div').children().contains('Make Appointment').should('exist')
	})
})
