describe("Single H5P player", () => {
  beforeEach(() => {
    cy.visit("test/single.html");
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
});
