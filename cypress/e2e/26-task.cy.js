describe('Task Command', () => {
	it('Console log by Task command', () => {
		cy.task('hello', 'John Doe')
	})
})
