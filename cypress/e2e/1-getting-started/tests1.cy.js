// cypress/integration/mock-api.spec.ts

// Import necessary Cypress commands and aliases

describe("load the web page", () => {
  beforeEach(() => {
    // Visit the page that triggers the GET request
    cy.visit("https://capstone-ooa2x040i-chequebaseio.vercel.app/"); // Adjust the URL as needed
  });

  it("should show a search bar and button", () => {
    // Use cy.get() to select the input element by its attribute
    cy.get('input[type="search"]').should("exist");
    cy.get("button").should("exist");
    cy.get('#button-addon1').should('exist')
    
  });
});

describe("Search bar should be able to enter data", () => {
  beforeEach(() => {
    // Visit the page that triggers the GET request
    cy.visit("https://capstone-ooa2x040i-chequebaseio.vercel.app/"); // Adjust the URL as needed
  });

  it("should show a search bar and button", () => {
    // Use cy.get() to select the input element by its attribute
    cy.get('input[type="search"]').type('pineapple')
  });
});



describe("Mock API Test", () => {
  beforeEach(() => {
    // Intercept the GET request and respond with mock data
    cy.intercept(
      "GET",
      "http://localhost:8080/items/search?name=grocery&page=0&size=10",
      {
        fixture: "mock-data.json", // Assuming your mock data is in a fixture file named mock-data.json
      }
    ).as("getItems");

    // Visit the page that triggers the GET request
    cy.visit("https://capstone-ooa2x040i-chequebaseio.vercel.app/"); // Adjust the URL as needed
  });

  it("should intercept and return mock data", () => {
    // Wait for the intercepted request to complete
    cy.wait("@getItems").then((interception) => {
      // Check if the response contains the expected data
      const mockData = interception.response.body;

      // Add your assertions here
      // For example, you can check the length of the array
      expect(mockData).to.have.lengthOf(10); // Assuming the array contains 10 items
    });
  });
});



describe("It should return data after search query is submitted", () => {
  beforeEach(() => {
    // Visit the page that triggers the GET request
    cy.visit("https://capstone-ooa2x040i-chequebaseio.vercel.app/"); // Adjust the URL as needed
  });

  it("should show a search bar and button", () => {
    // Use cy.get() to select the input element by its attribute
    cy.get('input[type="search"]').type('pineapple')
    cy.get('[id="button-addon1"]').click({force: true})
  });
});
