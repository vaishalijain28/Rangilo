describe('Base Component Tests', () => {
    beforeEach(() => {
      // Set up tasks that need to be performed before each test case
      // For example, visit the webpage containing the base component
      cy.visit('https://rrangiloshop.in/');
    });
  
    it('should be visible on the page', () => {
      // Assertion to check if the base component is visible on the page
      cy.get('.base-component').should('be.visible');
    });
  
    it('should have correct content', () => {
      // Assertion to check if the base component contains correct content
      cy.get('.base-component').should('contain', 'Expected Content');
    });
  
    it('should respond to user interaction', () => {
      // Interaction with the base component, for example, clicking a button
      cy.get('.base-component button').click();
  
      // Assertion to verify the result of the interaction
      cy.get('.base-component .result').should('contain', 'Expected Result');
    });
  
    // Add more test cases as needed
  });
  