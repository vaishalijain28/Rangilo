// cypress/integration/imageComponent.spec.js

describe('Image Component Test', () => {
    beforeEach(() => {
      // Assuming your website URL is 'http://localhost:3000'
      cy.visit('https://rrangiloshop.in/');
    });
  
    it('should display the image', () => {
      // Assuming your image selector is '.image-container img'
      cy.get('.image-container img').should('be.visible'); // Verifying that the image is visible
    });
  
    it('should have the correct source', () => {
      // Assuming your image selector is '.image-container img'
      cy.get('.image-container img').should('have.attr', 'src').and('include', 'example.jpg');
      // Replace 'example.jpg' with the expected source of your image
    });
  
    // Add more test cases as needed
  });
  