const Page = require('../page-objects/Page')

class MakeAppointmentPage extends Page {
	static btnBookAppointment = '#btn-book-appointment'

	static canDisplayMakeAppointment() {
		cy.get(this.btnBookAppointment).should('exist')
	}
}

module.exports = MakeAppointmentPage
