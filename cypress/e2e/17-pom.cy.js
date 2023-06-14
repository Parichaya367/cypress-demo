const LoginPage = require('../page-objects/LoginPage')
const MakeAppointmentPage = require('../page-objects/MakeAppointmentPage')

describe('Page Object Model', () => {
	beforeEach(() => {
		LoginPage.navigateToURL('https://katalon-demo-cura.herokuapp.com/')
		cy.fixture('mydata.json').as('data')
	})
	it('Can login with valid username and password', function () {
		LoginPage.clickMakeAppoint()
		LoginPage.inputLoginForm(this.data.USERNAME, this.data.PASSWORD)
		MakeAppointmentPage.canDisplayMakeAppointment()
	})

	it('Cannot login with invalid user', function () {
		const alertMessage =
			'Login failed! Please ensure the username and password are valid.'
		LoginPage.clickMakeAppoint()
		LoginPage.inputLoginForm(this.data.INVALID_USERNAME, this.data.PASSWORD)
		LoginPage.canDisplayAlert(alertMessage)
	})

	it('Cannot login with invalid user', function () {
		const alertMessage =
			'Login failed! Please ensure the username and password are valid.'
		LoginPage.clickMakeAppoint()
		LoginPage.inputLoginForm(this.data.USERNAME, this.data.INVALID_PASSWORD)
		LoginPage.canDisplayAlert(alertMessage)
	})
})
