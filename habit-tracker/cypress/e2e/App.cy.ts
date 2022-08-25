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

  it("Resetting the goal", () => {
    cy.visit("/");
    cy.get("#goal").contains("Goal: 15");
    cy.get("#goal-inpit").should("be.hidden")
    cy.get("#set-goal").click();
    cy.get("#goal-input").should("be.visible").type("100");
    cy.get("#goal-submit").click();
    cy.get("#goal").contains("Goal: 100");
    cy.get("#set-goal").click();
    cy.get("3goal-input").type("8");
    cy.get("#goal").contains("Goal: 8");
    cy.get("#goal-submit").click();
    cy.get("#set-goal").click();
    cy.get("#goal-input").type("Hello");
    cy.get("#goal-submit").click();
    cy.contains("Please, input a number")
  });
});
