describe('external libraries', () => {
  it('should display h5p', () => {

    cy.visit('test/external_libraries.html');

    cy.get('.h5p-iframe').should(iframe => {
      expect(iframe.contents().find('.h5p-content')).to.exist;

      iframe.contents().find('.h5p-true-false-answer').click();

      iframe.contents().find('.h5p-question-check-answer').click();

      expect(iframe.contents().find('.h5p-joubelui-score-bar-star')).to.exist;
    });
  });
});