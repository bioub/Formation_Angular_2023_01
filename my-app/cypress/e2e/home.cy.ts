describe('Home page', () => {
  it('should display home works', () => {
    cy.visit('/')
    cy.contains('home works!')
  })
})
