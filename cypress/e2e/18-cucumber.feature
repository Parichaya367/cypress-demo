Feature: Login to Application

    As a valid user
    I can login into Application
    As a invalid user
    I cannot login into Application

    Scenario: Valid login with valid user
    Given I open login page
    Then I fill username with "John Doe"
    And I fill password with "ThisIsNotAPassword"
    And I click login button
    Then I can see Make Appointment page

    Scenario: Invalid login with invalid user
    Given I open login page
    Then I fill username with "Jake Sim"
    And I fill password with "ThisIsNotAPassword"
    And I click login button
    Then I can alert message "Login failed! Please ensure the username and password are valid."