describe("The main page renders", () => {
  it("All main page components render", () => {
    //Elements of the Main page
    cy.visit("/");
    cy.get(".book-tracker-body").should("be.visible");
    cy.get(".habit-title");
    cy.get(".goals-page");
    cy.get(".pages-score");
    cy.get(".time-reading-goal");
    cy.get(".book-list");
    cy.get(".finished-list");
  });

  it("Resetting the goal", () => {
    cy.visit("/");
    cy.get("#goal").contains("Goal: 15");
    cy.get("#set-goal").click();
    cy.get("#goal-input").clear().type("100");
    cy.get("#goal-submit").click();
    cy.get("#goal").contains("Goal: 100");
    cy.get("#set-goal").click();
    cy.get("#goal-input").clear().type("8");
    cy.get("#goal").contains("Goal: 8");
    cy.get("#goal-submit").click();
  });
  
  it("Invalid goal sets", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);
    
    cy.get("#set-goal").click();
    cy.get("#goal-input").clear().type("Hello");
    cy.get("#goal-submit")
      .click()
      .then(() =>
        expect(stub.getCall(0)).to.be.calledWith(
          "The goal should be a positive number"
        )
      );
    cy.get("#set-goal").click();
    cy.get("#goal-input").clear().type("-23");
    cy.get("#goal-submit")
      .click()
      .then(() =>
        expect(stub.getCall(0)).to.be.calledWith(
          "The goal should be a positive number"
        )
      );
  });
});
