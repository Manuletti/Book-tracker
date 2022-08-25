describe("The main page renders", () => {
  it("All main page components render", () => {
    //Elements of the Main page
    cy.visit("/");
    cy.get(".book-tracker-body").should("be.visible");
    cy.get(".habit-title");
    cy.get(".goals-page");
    cy.get(".pages-score");
    cy.get(".time-reading-goal")
    cy.get(".book-list");
    cy.get(".finished-list");
  });
});
