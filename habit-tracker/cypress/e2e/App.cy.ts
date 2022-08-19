describe("The main page renders", () => {
  it("The main page components render", () => {
    //Elements of the Main page
    cy.visit("/");
    cy.get(".book-tracker-body").should("be.visible").contains("Book tracker");
  });

  it("Get Quasar elements and labels", () => {
    cy.visit("/");
    cy.get(".goals-page").should("be.visible").contains("Reading goals");
    cy.get("#books-goal").should("be.visible"); //quasar component
    cy.get("#pages-goal"); //quasar component
    cy.get("#minutes-goal"); //quasar component
    cy.get(".goal-label");
  });
});
