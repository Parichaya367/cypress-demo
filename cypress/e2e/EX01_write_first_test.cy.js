describe('', () => {
	const expected_true = true
	const expected_5 = 5

	before(() => {
		cy.log('This is before')
	})

	after(() => {
		cy.log('This is after')
	})

	beforeEach(() => {
		cy.log('This is beforeEach')
	})

	afterEach(() => {
		cy.log('This is afterEach')
	})
	it('Should', () => {
		cy.wrap(true).should('equal', expected_true)
		cy.wrap(3 + 2).should('equal', expected_5)
	})

	it('Expect', () => {
		expect(true).to.equal(expected_true)
		expect(2 + 3).to.equal(expected_5)
	})

	it('Assert', () => {
		assert.equal(true, expected_true)
		assert.equal(2 + 3, expected_5)
	})
})
