describe("The main page renders", () => {
  it("The main page components render", () => {
    //Elements of the Main page
    cy.visit("/");
    cy.get(".book-tracker-body").should("be.visible").contains("Book tracker");
  });

  it("Get Goals", () => {
    cy.visit("/");
    cy.get(".goals-page")
      .should("be.visible")
      .contains("Reading goals")
      .contains("Books")
      .contains("Pages");
    cy.get("#books-goal").should("be.visible");
    cy.get("#pages-goal").should("be.visible");
  });
});
