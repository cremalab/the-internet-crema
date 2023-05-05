describe("App", function () {
  it("Contains The Internet by Crema", function () {
    cy.visit("/#");
    cy.contains("The Internet by Crema");
    cy.contains("Checkboxes ");
  });

  it("Contains Broken images", function () {
    cy.visit("/#/brokenimages");
    cy.contains("Broken Images");
  });
});
