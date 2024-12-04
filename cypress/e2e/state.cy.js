describe('State management', () => {
    beforeEach(() => {
        cy.visit('test/state.html');
    });

    it('should restore previous state with local data', () => {
        cy.iframe("#h5p-container-1 iframe.h5p-iframe.h5p-initialized")
            .should("be.visible")
            .within(() => {
                cy.get(".h5p-true-false-answers .h5p-true-false-answer")
                    .contains("False")
                    .invoke('attr', 'aria-checked')
                    .should('eq', 'true'); // no automated selection

                //following should pass
                cy.get(".h5p-question-check-answer").click();
                cy.get(".h5p-joubelui-score-bar-star").should("be.visible");
            });
    });

});
