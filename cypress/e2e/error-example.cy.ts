// https://on.cypress.io/api

describe('My First Error Test', () => {
  it('visits the app root url', () => {
    cy.visit('/about')
    cy.contains('h1', 'You did it!')
  })
})
