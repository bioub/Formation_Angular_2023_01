describe('todos page', () => {
  it('should show initial values', () => {
    cy.visit('/todos')
    cy.contains('ABC')
  })
  it('should add a todo', () => {
    cy.visit('/todos')
    cy.get('input[type=text]').type('Toto{enter}');
    cy.contains('XYZToto')
  })
})
