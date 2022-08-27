describe("The goal changing", () => {
  it("Resetting the goal", () => {
    cy.visit("/");
    cy.get("#goal").contains("Goal: 15");
    cy.get("#goal-edit").click();
    cy.get("#goal-input").clear().type("100");
    cy.get("#goal-edit").click();
    cy.get("#goal").contains("Goal: 100");
    cy.get("#goal-edit").click();
    cy.get("#goal-input").clear().type("8");
    cy.get("#goal-edit").click();
    cy.get("#goal").contains("Goal: 8");
  });

  it("Invalid goal sets", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);

    cy.get("#goal-edit").click();
    cy.get("#goal-input").clear().type("Hello");
    cy.get("#goal-edit")
      .click()
      .then(() =>
        expect(stub.getCall(0)).to.be.calledWith(
          "The goal should be a positive number"
        )
      );
    cy.get("#goal-edit").click();
    cy.get("#goal-input").clear().type("-23");
    cy.get("#goal-edit")
      .click()
      .then(() =>
        expect(stub.getCall(0)).to.be.calledWith(
          "The goal should be a positive number"
        )
      );
  });
});
