const Page = require('../page-objects/Page')

class LoginPage extends Page {
	static btnMakeAppoint = '#btn-make-appointment'
	static txtUsername = '#txt-username'
	static txtPassword = '#txt-password'
	static btnLogin = '#btn-login'
	static divAlertMessage = '.lead.text-danger'

	static clickMakeAppoint() {
		cy.get(this.btnMakeAppoint).click()
	}

	static inputLoginForm(username, password) {
		cy.get(this.txtUsername).type(username)
		cy.get(this.txtPassword).type(password)
		cy.get(this.btnLogin).click()
	}

	static canDisplayAlert(expectedAlert) {
		cy.get(this.divAlertMessage).should('have.text', expectedAlert)
	}
}

module.exports = LoginPage
