beforeEach(function () {
  cy.visit("/#");
});

it("autocomplete menu validation", function () {
  cy.contains("Autocomplete").should("exist").click();
  cy.url().should("contain", "/the-internet-crema/#/autocomplete");
  cy.contains("Movie:").should("exist");
  cy.contains("The Internet by Crema").should("exist").click();
  cy.get('[data-testid="home-container"]').should("exist");

  cy.contains("Broken Images").should("exist").click();
  cy.url().should("contain", "/the-internet-crema/#/brokenimages");
  cy.get('[src="asdf.jpg"]').should("exist");
  cy.get('[src="hjkl.jpg"]').should("exist");
  cy.get('[src="img/avatar-blank.jpg"]').should("exist");
  cy.contains("The Internet by Crema").should("exist").click();
  cy.get('[data-testid="home-container"]').should("exist");

  cy.contains("Checkboxes").should("exist").click();
  cy.url().should("contain", "/the-internet-crema/#/checkboxes");
  cy.get('input[aria-label="primary checkbox"]').should("exist");
  cy.get('input[aria-label="secondary checkbox"]').should("exist");
  cy.contains("The Internet by Crema").should("exist").click();
  cy.get('[data-testid="home-container"]').should("exist");

  cy.contains("Dropdown").should("exist").click();
  cy.url().should("contain", "/the-internet-crema/#/dropdown");
  cy.get("#demo-simple-select").should("exist");
  cy.contains("The Internet by Crema").should("exist").click();
  cy.get('[data-testid="home-container"]').should("exist");
});

// it("broken images menu validation", function () {
//   cy.contains("Broken Images").should("exist").click();
//   cy.url().should("contain", "/the-internet-crema/#/brokenimages");
//   cy.get('[src="asdf.jpg"]').should("exist");
//   cy.get('[src="hjkl.jpg"]').should("exist");
//   cy.get('[src="img/avatar-blank.jpg"]').should("exist");
//   cy.contains("The Internet by Crema").should("exist").click();
//   cy.get('[data-testid="home-container"]').should("exist");
// });

// it("checkboxes menu validation", function () {
//   cy.contains("Checkboxes").should("exist").click();
//   cy.url().should("contain", "/the-internet-crema/#/checkboxes");
//   cy.get('input[aria-label="primary checkbox"]').should("exist");
//   cy.get('input[aria-label="secondary checkbox"]').should("exist");
//   cy.contains("The Internet by Crema").should("exist").click();
//   cy.get('[data-testid="home-container"]').should("exist");
// });

// it("dropdown menu validation", function () {
//   cy.contains("Dropdown").should("exist").click();
//   cy.url().should("contain", "/the-internet-crema/#/dropdown");
//   cy.get("#demo-simple-select").should("exist");
//   cy.contains("The Internet by Crema").should("exist").click();
//   cy.get('[data-testid="home-container"]').should("exist");
// });
