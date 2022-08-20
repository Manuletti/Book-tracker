describe("The main page renders", () => {
  it("The main page components render", () => {
    //Elements of the Main page
    cy.visit("/");
    cy.get(".book-tracker-body").should("be.visible");
    cy.get(".habit-title");
  });

  it("Get abstract habit tracker", () => {
    cy.visit("/");
    cy.get(".goals-page");
    cy.get("#habit-tracker").should("be.visible"); //quasar component
    cy.get(".goal-label");
    cy.contains("Goal");
    cy.contains("Left");
  });

  //This should be in a separate test
  //because not everyone would have a book goals
  it("Get book goals", () => {
    cy.get(".book-tracker").contains("Pages").contains("Time");
    cy.get("#pages-goal"); //quasar component
    cy.get("#minutes-goal"); //quasar component
  });
});
