describe('Interacting', () => {
	beforeEach(() => {
		cy.visit('https://example.cypress.io/commands/actions')
	})

	it('Input text', () => {
		cy.get('#email1').type('Hello').should('have.value', 'Hello')
	})

	it('Select input field', () => {
		cy.get('select.form-control.action-select-multiple').select('fr-apples')
	})

	it('Checkbox or radio button', () => {
		cy.get(
			'#actions > div > div:nth-child(26) > div > div.action-checkboxes > div:nth-child(1) > label > input[type=checkbox]'
		).check()
	})

	it('Click button', () => {
		cy.get('#actions > div > div:nth-child(17) > div > button').click()
		cy.contains('Click to toggle popover').click()
	})

	it('Scroll', () => {
		cy.get('[name="range-input"]').scrollIntoView()
	})
})

/*
describe('Alert popup', () => {
	beforeEach(() => {
		cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
	})
	it('Alert', () => {
		cy.on('window:alert', str => {
			expect(str).to.equal('I am a JS Alert')
		})
		cy.contains('Click for JS Alert').click()
		cy.get('#result').should('have.text', 'You successfully clicked an alert')
	})

	it('Alert confirm', () => {
		cy.on('window:confirm', str => {
			expect(str).to.equal('I am a JS Confirm')
			return true //Okay button
			//return false -> Cancle button
		})
		cy.contains('Click for JS Confirm').click()
		cy.get('#result').should('have.text', 'You clicked: Ok')
	})

	it('Alert propmt', () => {
		cy.window().then(win => {
			cy.stub(win, 'prompt').returns('Hello')
			cy.contains('Click for JS Prompt').click()
			cy.get('#result').should('have.text', 'You entered: Hello')
		})
	})
})
*/
