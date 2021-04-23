describe('single', () => {
    it('should display h5p', () => {

        cy.visit('test/advance-options.html');

        cy.get('.h5p-iframe').should(iframe => {
            expect(iframe.contents().find('.h5p-content')).to.exist;

            iframe.contents().find('.h5p-true-false-answer').click();

            iframe.contents().find('.h5p-question-check-answer').click();

            expect(iframe.contents().find('.h5p-joubelui-score-bar-star')).to.exist;

            expect(iframe.contents().find('.h5p-actions').find('.h5p-export')).to.exist;

            iframe.contents()
                .find('.h5p-actions')
                .find('.h5p-export')
                .click();

            expect(iframe.contents().find('.h5p-download-button')).to.exist;
        });
    });
});