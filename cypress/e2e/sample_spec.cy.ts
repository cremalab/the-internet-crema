describe("App", function () {
  it("Contains The Internet by Crema", function () {
    cy.visit("/");
    cy.contains("The Internet by Crema");

    cy.get(".MuiButton-label").click;
    cy.contains("Checkboxes ");
    //cy.get(".id").contains("The Internet by Crema")
    //cy.get(".App-link").should("have.attr", "href", "https://reactjs.org")
  });

  it("Contains Broken images", function () {
    cy.visit("/brokenimages");
    cy.contains("Broken Images");
    //cy.get(".id").contains("The Internet by Crema")
    //cy.get(".App-link").should("have.attr", "href", "https://reactjs.org")
  });
});
