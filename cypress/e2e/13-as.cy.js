describe('Alias Command', () => {
	beforeEach(() => {
		cy.visit('https://katalon-demo-cura.herokuapp.com/')
	})
	it('Reuse Web element', () => {
		cy.get('#btn-make-appointment').as('btnMakeAppo')
		cy.get('@btnMakeAppo').should('exist')
		cy.get('@btnMakeAppo').click()
	})

	it('Reuse value in then', () => {
		cy.get('#btn-make-appointment')
			.then(elm => {
				var text = elm.text()
				cy.log(text)
				return text
			})
			.as('btnText')

		cy.get('@btnText').then(str => {
			expect(str).to.equal('Make Appointment')
		})
	})

	it('Reuse value in then : method 2', () => {
		cy.get('#btn-make-appointment').then(elm => {
			var text = elm.text()
			cy.wrap(text).as('btnText')
		})

		cy.get('@btnText').then(str => {
			expect(str).to.equal('Make Appointment')
		})
	})
})
