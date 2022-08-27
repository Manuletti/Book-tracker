describe("The main page renders", () => {
  it("All main page components render", () => {
    //Elements of the Main page
    cy.visit("/");
    cy.get(".book-tracker-body").should("be.visible");
    cy.get(".habit-title");
    cy.get(".goals-page");
    cy.get(".book-list");
    cy.get(".finished-list");
  });
  
  it("Get all elements of goal page", () => {
    cy.get("#habit-tracker").should("be.visible");
    cy.get("#goal-edit")
    cy.get(".pages-score");
    cy.get(".time-reading-goal");
  });
  
  it("Get book list elements", () => {
    cy.get(".book-list-settings");
    cy.get("#add-book");
    cy.get(".book-item");
    cy.get(".book-progress");
    cy.get("book-edit");
  });
});
