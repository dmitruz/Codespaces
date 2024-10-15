describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})


// Task 1
// Visit this page (https://example.cypress.io).

// Query for an element.

// Interact with that element.

// Assert about the content on the page.


describe('Test Example Page with Links', () => {
  it('Visits the page, interacts with a link, and asserts content', () => {
    // Step 1: Visit the page
    cy.visit('https://example.cypress.io');
    
    // Step 2: Query for a link element (using <a> tag and finding by text 'click me')
    cy.get('a').contains('Commands').click(); // Directly click the link without alias

    // Step 3: Assert the content on the page after clicking the link
    cy.contains('Command').should('be.visible'); // Example assertion based on expected content after clicking the link
  });
});


// Task 2
// Visit this page (https://example.cypress.io/commands/actions).

// Query for the email input field.

// Type your email address.

// Assert about the content of the input field.

describe('Visit an Email', () => {
  it ('Visits the page, query for the email input field, and type an email address', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="email"]').should('have.value', 'test@example.com')
  });
});

// Task 3
// Visit this page (https://example.cypress.io/commands/actions).

// Query for the action button with a class ".action-btn" and click on it.

// Query for the element with an id "#action-canvas" and click on it.

// Query for the element with an id "#action-canvas" and click on the "topLeft".

// Query for the element with an id "#action-canvas" and click on the "bottomRight".

describe('Test Actions on Canvas and Button', () => {
  it('Visits the page and performs various actions on elements', () => {
    // Step 1: Visit the page
    cy.visit('https://example.cypress.io/commands/actions');
    
    // Step 2: Query for the action button with class ".action-btn" and click on it
    cy.get('.action-btn').click();
    
    // Step 3: Query for the element with id "#action-canvas" and click on it (default click location)
    cy.get('#action-canvas').click();
    
    // Step 4: Query for the element with id "#action-canvas" and click on "topLeft" (0, 0 position)
    cy.get('#action-canvas').click('topLeft');
    
    // Step 5: Query for the element with id "#action-canvas" and click on "bottomRight" (maximum position)
    cy.get('#action-canvas').click('bottomRight');
  });
});

// Test for calculator functionality:


describe('Calculator functionality', () => {
    beforeEach(() => {
        // Visit the page where the calculator is hosted
        cy.visit('http://192.168.239.83:5500/index.html');  // Replace with actual path
    });

    it('Performs addition correctly', () => {
        // Click buttons for 7 + 3 =
        cy.get('button').contains('7').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('=').click();

        // Assert the result is 10
        cy.get('#result').should('have.text', '10');
    });

    it('Performs subtraction correctly', () => {
        // Click buttons for 9 - 5 =
        cy.get('button').contains('9').click();
        cy.get('button').contains('−').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('=').click();

        // Assert the result is 4
        cy.get('#result').should('have.text', '4');
    });

    it('Performs multiplication correctly', () => {
        // Click buttons for 4 * 6 =
        cy.get('button').contains('4').click();
        cy.get('button').contains('×').click();
        cy.get('button').contains('6').click();
        cy.get('button').contains('=').click();

        // Assert the result is 24
        cy.get('#result').should('have.text', '24');
    });

    it('Performs division correctly', () => {
        // Click buttons for 8 / 2 =
        cy.get('button').contains('8').click();
        cy.get('button').contains('÷').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('=').click();

        // Assert the result is 4
        cy.get('#result').should('have.text', '4');
    });

    it('Clears the input correctly', () => {
        // Enter some numbers, then clear
        cy.get('button').contains('7').click();
        cy.get('button').contains('C').click();

        // Assert the result is empty
        cy.get('#result').should('have.text', '');
    });
});

// link to my recorded video https://www.loom.com/share/4114d0cc167347e49ffd6b3cab47de86

// _-------------------------------------------------------------------------------------------------

// Test for Dcissor, Rock and Paper game:

// 1. Varify that elements are renderd correctly:
describe('Rock, Paper, Scissors Game', () => {
  beforeEach(() => {
    cy.visit('http://192.168.239.83:5500/testingTechnologies/index.html'); 
  });

  it('should render game buttons and result elements', () => {
    cy.get('#rock').should('exist');
    cy.get('#paper').should('exist');
    cy.get('#scissors').should('exist');
    cy.get('#user-option').should('exist');
    cy.get('#computer-option').should('exist');
    cy.get('#result').should('exist');
  });
});

// 2  Test button clicks and corresponding display changes

describe('Player choice should be displayed', () => {
  it('should display the correct choice when Rock is clicked', () => {
    cy.get('#rock').click();
    cy.get('#user-option').should('have.text', 'Rock');
    cy.get('#computer-option').invoke('text').should('match', /Rock|Paper|Scissors/);
  });

  it('should display the correct choice when Paper is clicked', () => {
    cy.get('#paper').click();
    cy.get('#user-option').should('have.text', 'Paper');
    cy.get('#computer-option').invoke('text').should('match', /Rock|Paper|Scissors/);
  });

  it('should display the correct choice when Scissors is clicked', () => {
    cy.get('#scissors').click();
    cy.get('#user-option').should('have.text', 'Scissors');
    cy.get('#computer-option').invoke('text').should('match', /Rock|Paper|Scissors/);
  });
});

// 3 Test game outcomes

describe('Game outcomes should be correct', () => {
  it('should display "You win!" when user chooses Rock and computer chooses Scissors', () => {
    cy.get('#rock').click();
    cy.get('#computer-option').then(($computerOption) => {
      if ($computerOption.text() === 'Scissors') {
        cy.get('#result').should('have.text', 'You win!');
      }
    });
  });

  it('should display "You lose!" when user chooses Rock and computer chooses Paper', () => {
    cy.get('#rock').click();
    cy.get('#computer-option').then(($computerOption) => {
      if ($computerOption.text() === 'Paper') {
        cy.get('#result').should('have.text', 'You lose!');
      }
    });
  });

  it('should display "It is a tie!" when user and computer choose the same option', () => {
    cy.get('#rock').click();
    cy.get('#computer-option').then(($computerOption) => {
      if ($computerOption.text() === 'Rock') {
        cy.get('#result').should('have.text', 'It is a tie!');
      }
    });
  });
});

// 4. Test multiple rounds

describe('Multiple rounds can be played', () => {
  it('should allow multiple rounds and reset game state', () => {
    cy.get('#rock').click();
    cy.get('#result').should('not.be.empty');

    cy.get('#paper').click();
    cy.get('#user-option').should('have.text', 'Paper');
    cy.get('#result').should('not.be.empty');
  });
});

// 5. Edge case testing

describe('Edge case tests', () => {
  it('should always have valid computer options', () => {
    cy.get('#rock').click();
    cy.get('#computer-option').invoke('text').should('match', /Rock|Paper|Scissors/);
  });
});
