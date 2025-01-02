describe("H5P player with advance options", () => {
  beforeEach(() => {
    cy.visit("test/advance-options.html");
  });

  it("should display h5p", () => {
    cy.iframe("iframe.h5p-iframe.h5p-initialized")
      .should("be.visible")
      .within(() => {
        cy.get(".h5p-true-false-answers .h5p-true-false-answer")
          .contains("False")
          .click();

        cy.get(".h5p-question-check-answer").click();
        cy.get(".h5p-joubelui-score-bar-star").should("be.visible");
      });
  });

  it("should display export dialog", () => {
    cy.iframe("iframe.h5p-iframe.h5p-initialized").within(() => {
      cy.get(".h5p-actions").find(".h5p-export > button").should("be.visible").click();

      cy.get(".h5p-download-button").should("be.visible");
    });
  });

  it("should display embed code dialog", () => {
    cy.iframe("iframe.h5p-iframe.h5p-initialized").within(() => {
      cy.get(".h5p-actions").find(".h5p-embed > button").should("be.visible").click();

      cy.get(".h5p-embed-code-container").should("be.visible");
      cy.get(".h5p-embed-size").should("be.visible");
    });
  });
});
