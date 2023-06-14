describe('Intercept command', () => {
	it('Intercept and wait', () => {
		cy.intercept(
			'GET',
			'https://www.scb.co.th/services/scb/exchangeRateService/**'
		).as('exchangeRateReq')

		cy.visit(
			'https://www.scb.co.th/en/personal-banking/foreign-exchange-rates.html'
		)
		cy.wait('@exchangeRateReq')
		cy.log('Finish !!!')
	})

	it('Mocking exchange rate', () => {
		cy.intercept(
			'GET',
			'https://www.scb.co.th/services/scb/exchangeRateService/**',
			{
				fixture: 'exchange.json',
			}
		).as('exchangeRateReq')

		cy.visit(
			'https://www.scb.co.th/en/personal-banking/foreign-exchange-rates.html'
		)

		cy.wait('@exchangeRateReq')
		cy.log('Finish:)')
	})
})
