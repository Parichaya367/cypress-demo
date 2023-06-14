describe('Make Appointment', () => {
	beforeEach(() => {
		cy.visit('https://katalon-demo-cura.herokuapp.com/')
	})
	/*
	it('Check Header1', () => {
		const expected = 'We Care About Your Health'
		cy.get('#top > div > h3').should('have.text', expected)
	})

	it('Check Header3', () => {
		const expected = 'CURA Healthcare Service'
		cy.get('#top > div > h1').should('have.text', expected)
	})
*/
	it('Click Make Appoint', () => {
		const expected = 'Make Appointment'
		cy.contains(expected).click()
	})
})

describe('TEST CASE 1', () => {
	beforeEach(() => {
		cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
	})

	it('Check Header Login', () => {
		const expected = 'Login'
		cy.get('#login > div > div > div.col-sm-12.text-center > h2').should(
			'have.text',
			expected
		)
	})

	it('Check Login Desc', () => {
		const expected = 'Please login to make appointment.'
		cy.get('#login > div > div > div.col-sm-12.text-center > p').should(
			'have.text',
			expected
		)
	})

	it('Check Username box', () => {
		cy.get(
			'#login > div > div > div.col-sm-offset-3.col-sm-6 > form > div:nth-child(2) > label'
		).should('have.text', 'Username')
		cy.get('#txt-username').should('have.attr', 'placeholder', 'Username')
		cy.get('#txt-username').should('have.attr', 'type', 'text')
		cy.get('#txt-username').should('have.class', 'form-control')
		cy.get('#txt-username').should('be.visible')
		cy.get('#txt-username').should('exist')
	})

	it('Check Password} box', () => {
		cy.get(
			'#login > div > div > div.col-sm-offset-3.col-sm-6 > form > div:nth-child(3) > label'
		).should('have.text', 'Password')
		cy.get('#txt-password').should('have.attr', 'placeholder', 'Password')
		cy.get('#txt-password').should('have.attr', 'type', 'password')
		cy.get('#txt-password').should('have.class', 'form-control')
		cy.get('#txt-password').should('be.visible')
		cy.get('#txt-password').should('exist')
	})

	it('login pass with valid user', () => {
		const userName = 'John Doe'
		const pass = 'ThisIsNotAPassword'
		cy.get('#txt-username').type(userName).should('have.value', userName)
		cy.get('#txt-password').type(pass).should('have.value', pass)
		cy.get('#btn-login').click()
		cy.get('#appointment > div > div > div > h2').should(
			'have.text',
			'Make Appointment'
		)
	})

	it('login fail with invalid password', () => {
		const userName = 'John Doe'
		const pass = 'WrongPassword'
		cy.get('#txt-username').type(userName).should('have.value', userName)
		cy.get('#txt-password').type(pass).should('have.value', pass)
		cy.get('#btn-login').click()
		cy.get(
			'#login > div > div > div.col-sm-12.text-center > p.lead.text-danger'
		).should(
			'have.text',
			'Login failed! Please ensure the username and password are valid.'
		)
	})

	it('login fail with invalid username', () => {
		const userName = 'Maprang Shim'
		const pass = 'ThisIsNotAPassword'
		cy.get('#txt-username').type(userName).should('have.value', userName)
		cy.get('#txt-password').type(pass).should('have.value', pass)
		cy.get('#btn-login').click()
		cy.get(
			'#login > div > div > div.col-sm-12.text-center > p.lead.text-danger'
		).should(
			'have.text',
			'Login failed! Please ensure the username and password are valid.'
		)
	})
})
