describe('Apiiii Testing', () => {
	beforeEach(() => {})
	it('Get request', () => {
		cy.request({
			method: 'GET',
			url: 'https:///jsonplaceholder.typicode.com/posts/1',
		}).as('res')
		//status
		cy.get('@res').its('status').should('equal', 200)

		//headers
		cy.get('@res').its('headers.server').should('equal', 'cloudflare')

		//body
		cy.get('@res').its('body.userId').should('equal', 1)
		cy.get('@res').its('body.id').should('equal', 1)
		cy.get('@res')
			.its('body.title')
			.should(
				'equal',
				'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
			)
		cy.get('@res')
			.its('body.body')
			.should(
				'equal',
				'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
			)
	})

	it.only('Post api', () => {
		cy.fixture('data.json').as('data')
		cy.get('@data').then(data => {
			cy.request({
				method: 'POST',
				url: 'https:///jsonplaceholder.typicode.com/posts',
				body: data,
			}).as('res')
		})

		//status
		cy.get('@res').its('status').should('equal', 201)

		//headers
		cy.get('@res')
			.its('headers.content-type')
			.should('equal', 'application/json; charset=utf-8')

		//body
		cy.get('@res').its('body.userId').should('equal', 2)
		cy.get('@res').its('body.id').should('equal', 101)
		cy.get('@res').its('body.title').should('equal', 'Maprang is here')
		cy.get('@res')
			.its('body.body')
			.should('equal', 'I am ready for this zimzalabimmmmmm')
	})

	it('fail case', () => {
		cy.fixture('data.json').as('data')
		cy.request({
			method: 'POST',
			url: 'https:///jsonplaceholder.typicode.com/posts/23564321345432',
			body: data,
			failOnStatusCode: false,
		}).as('res')

		//status
		cy.get('@res').its('status').should('equal', 404)
	})
})
