describe('interactive book', () => {
  it('should display interactive book', () => {

    cy.visit('test/interactive_book.html');

    cy.get('.h5p-iframe').should(iframe => {
      expect(iframe.contents().find('.h5p-content')).to.exist;

      iframe.contents().find('.h5p-interactive-book-cover-readbutton').click();

      expect(iframe.contents().find('.navigation-list')).to.exist;
    });
  });
});