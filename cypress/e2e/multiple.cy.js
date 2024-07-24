describe("Multiple H5P players", () => {
  beforeEach(() => {
    cy.visit("test/multiple.html");
  });

  it("should display & load multiple h5p players", () => {
    cy.iframe("#h5p-container-1 iframe.h5p-iframe.h5p-initialized")
      .should("be.visible")
      .within(() => {
        cy.get(".h5p-true-false-answers .h5p-true-false-answer")
          .contains("False")
          .click();

        cy.get(".h5p-question-check-answer").click();

        cy.get(".h5p-joubelui-score-bar-star").should("be.visible");
      });
    cy.iframe("#h5p-container-2  iframe.h5p-iframe.h5p-initialized")
      .should("be.visible")
      .within(() => {
        cy.get(".h5p-true-false-answers .h5p-true-false-answer")
          .contains("False")
          .click();

        cy.get(".h5p-question-check-answer").click();

        cy.get(".h5p-joubelui-score-bar-star").should("be.visible");
      });
  });
});
