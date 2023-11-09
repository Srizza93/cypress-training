// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.get("[data-test-id='toto']")
    cy.findByRole('link', { name: 'about' }).click()
    cy.contains('h1', 'You did it!')
  })
})
