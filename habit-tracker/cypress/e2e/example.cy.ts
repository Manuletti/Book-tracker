// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Renders the page", () => {
    cy.visit("/");
    cy.contains("h1", "Hello World!");
  });
});
