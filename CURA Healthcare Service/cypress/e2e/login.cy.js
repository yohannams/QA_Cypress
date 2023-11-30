describe("login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("success login with custom command", () => {
    cy.login("John Doe", "ThisIsNotAPassword");
    cy.url().should(
      "eq",
      "https://katalon-demo-cura.herokuapp.com/#appointment"
    );
  });

  it("success login", () => {
    cy.get("#menu-toggle > .fa").click();
    cy.get('[href="profile.php#login"]').click();
    cy.get("#txt-username").type("John Doe");
    cy.get("#txt-password").type("ThisIsNotAPassword");
    cy.get("#btn-login").click();
    cy.url().should(
      "eq",
      "https://katalon-demo-cura.herokuapp.com/#appointment"
    );
  });

  it("failed login", () => {
    cy.get("#menu-toggle > .fa").click();
    cy.get('[href="profile.php#login"]').click();
    cy.get("#txt-username").type("John Doe");
    cy.get("#txt-password").type("ThisIsAPassword");
    cy.get("#btn-login").click();
    cy.get(".text-danger").contains(
      "Login failed! Please ensure the username and password are valid."
    );
  });

  it("failed login", () => {
    cy.get("#menu-toggle > .fa").click();
    cy.get('[href="profile.php#login"]').click();
    cy.get("#txt-username").type("John");
    cy.get("#txt-password").type("ThisIsNotAPassword");
    cy.get("#btn-login").click();
    cy.get("p").contains(
      "Login failed! Please ensure the username and password are valid."
    );
  });

  it("failed login", () => {
    cy.get("#menu-toggle > .fa").click();
    cy.get('[href="profile.php#login"]').click();
    cy.get("#txt-username").type("John");
    cy.get("#btn-login").click();
    cy.get(".text-danger").should(
      "contain.text",
      "Login failed! Please ensure the username and password are valid."
    );
  });
});
