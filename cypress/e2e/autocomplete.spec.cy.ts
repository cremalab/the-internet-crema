beforeEach(function () {
  cy.visit("/#");
  cy.contains("Autocomplete").should("exist").click();
  cy.url().should('eq', 'http://localhost:5173/the-internet-crema/#/autocomplete');
});

it("autocomplete dropdown", function () {
  cy.get('[data-testid="ArrowDropDownIcon"]').click()
  cy.contains('Juno').click()
  cy.get('[value="Juno (2007)"]').should('exist')
  cy.get('[data-testid="CloseIcon"]').click()
  cy.contains('Autocomplete').click()
  cy.contains('Movie').should('exist')
});

it("autocomplete type", function () {
  cy.get('input[type="text"]').type('Juno{downArrow}{enter}')
  cy.get('[value="Juno (2007)"]').should('exist')
  cy.get('[data-testid="CloseIcon"]').click()
  cy.contains('Autocomplete').click()
  cy.contains('Movie').should('exist')
});

it("return to main", function () {
  cy.contains('The Internet by Crema').click()
  cy.url().should('eq', 'http://localhost:5173/the-internet-crema/#/');
});

