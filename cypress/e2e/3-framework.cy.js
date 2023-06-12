describe('Login feature', () => {
	it('login pass with valid username and password', () => {
		//
	})

	it('Login fail with wrong username', () => {
		//
	})

	it('Login fail with wornf password', () => {
		//
	})

	// it.only i want test this only one -> make sure that the test is indepent or not
	// it.skip i want to skip this test
})

describe('Assertion', () => {
	var expected = 'Hello'

	before(() => {
		cy.log('BEFORE')
	})

	after(() => {
		cy.log('AFTER')
	})

	beforeEach(() => {
		cy.log('BEFORE EACH')
	})

	afterEach(() => {
		cy.log('AFTER EACH')
	})

	it('Should', () => {
		cy.wrap('Hello').should('equal', expected)
	})

	it('Expect', () => {
		expect('Hello').to.equal(expected)
	})

	it('Assert', () => {
		assert.equal('Hello', expected)
	})
})
