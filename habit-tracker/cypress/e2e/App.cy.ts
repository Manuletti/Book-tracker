describe("The main page renders", () => {
  it("The main page components render", () => {
    cy.visit("/");
    
    //Elements of the Main page
    cy.get(".book-tracker-body")
        .should("be.visible")
        .contains("p");
  });
});
