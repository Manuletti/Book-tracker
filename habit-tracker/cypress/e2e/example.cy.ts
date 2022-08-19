// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Renders the page and quasar element", () => {
    cy.visit("/");
    cy.contains("h1", "You did it!");
    cy.get("#quasar-element").should("be.visible")
  });
});
