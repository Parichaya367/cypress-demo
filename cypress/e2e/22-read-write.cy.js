describe('Read and Write file', () => {
	it('Write command', () => {
		cy.request({
			method: 'GET',
			url: 'https:///jsonplaceholder.typicode.com/posts/1',
		}).as('res')

		cy.get('@res')
			.its('body')
			.then(body => {
				cy.writeFile('response.json', body)
			})
	})

	it('Read file command', () => {
		cy.readFile('response.json').then(res => {
			cy.log(res.id, res.title, res.body)
		})
	})
})
