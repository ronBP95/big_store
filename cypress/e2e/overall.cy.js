describe('Overall flow', () => {
  it('Page visited', () => {
    cy.visit('bigstore.gatsbyjs.io')
  })
  it('Login Page Loaded', () => {
    cy.contains('Login').click()
  })
  it('Typed Email Into Input', () => {
    cy.get('input[name="email"]').type("new13@gmail.com")
  })
  it('Typed Password Into Input', () => {
    cy.get('input[name="password"]').type(123456)
  })
  it('Clicked Login Button', () => {
    cy.get('button[type="submit"]').click()
  })
  it('Page Data loaded Correctly (First Item Loaded)', () => {
    cy.get('div').contains("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
  })
  it('Added an Item to Cart', () => {
    cy.get('button').contains('Add to Cart').first().click()
  })
})