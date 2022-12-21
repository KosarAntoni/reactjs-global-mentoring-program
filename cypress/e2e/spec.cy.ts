describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')

    cy.contains('Fifty Shades Freed', { timeout: 1000 }).click()
    cy.url().should('include', '?movie=337167')

    cy.get('.header__search-button').click()
    cy.url().should('not.include', '?movie=337167')

    cy.contains('Documentary').click()
    cy.url().should('include', 'genre=documentary')

    cy.get('input').type('Hello, World').type('{enter}')
    cy.url().should('include', 'Hello,%20World')
  })
})
