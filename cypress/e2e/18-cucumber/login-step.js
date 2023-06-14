import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I open login page', () => {
	cy.visit('https://katalon-demo-cura.herokuapp.com')
	cy.get('#btn-make-appointment').click()
})

When('I fill username with {string}', username => {
	cy.get('#txt-username').type(username)
})

When('I fill password with {string}', password => {
	cy.get('#txt-password').type(password)
})

When('I click login button', () => {
	cy.get('#btn-login').click()
})

Then('I can see Make Appointment page', () => {
	cy.get('h2').should('have.text', 'Make Appointment')
})

Then('I can alert message {string}', message => {
	cy.get('.lead.text-danger').should('have.text', message)
})
