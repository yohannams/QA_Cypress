import Login from "../support/page-objects/login";

describe("login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("success login", () => {
    cy.get('[href="/login"]').click();
    cy.get("#Email").type("yo_hanna_ms@yahoo.com");
    cy.get("#Password").type("123456");
    cy.get(".login-button").click();
    cy.get("[href='/customer/info']").should(
      "contain.text",
      "yo_hanna_ms@yahoo.com"
    );
  });

  it("success login with checklist remember me", () => {
    cy.get('[href="/login"]').click();
    cy.get("#Email").type("yo_hanna_ms@yahoo.com");
    cy.get("#Password").type("123456");
    cy.get("#RememberMe").check();
    cy.get(".login-button").click();
    cy.get("[href='/customer/info']").should(
      "contain.text",
      "yo_hanna_ms@yahoo.com"
    );
  });

  it("failed login - wrong password", () => {
    cy.get('[href="/login"]').click();
    cy.get("#Email").type("yo_hanna_ms@yahoo.com");
    cy.get("#Password").type("123");
    cy.get(".login-button").click();
    cy.get(".message-error").should("contain.text", "Login was unsuccessful.");
    cy.get(".message-error").should(
      "contain.text",
      "The credentials provided are incorrect"
    );
  });

  it("failed login - empty email and password", () => {
    cy.get('[href="/login"]').click();
    cy.get(".login-button").click();
    cy.get(".message-error").should("contain.text", "Login was unsuccessful.");
    cy.get(".message-error").should(
      "contain.text",
      "No customer account found"
    );
  });
});

describe("Login using POM", () => {
  it("Success Login", () => {
    Login.visit();
    Login.fillEmail("yo_hanna_ms@yahoo.com");
    Login.fillPassword("123456");
    Login.clickLoginButton();
    cy.get("[href='/customer/info']").should(
      "contain.text",
      "yo_hanna_ms@yahoo.com"
    );
  });
});

describe("Login with custom command", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("success login", () => {
    cy.login("yo_hanna_ms@yahoo.com", "123456");
    cy.url().should("eq", "https://demowebshop.tricentis.com/");
  });
});

describe("Login using fixtures", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("success login", () => {
    cy.fixture("login.json").then((data) => {
      cy.get('[href="/login"]').click();
      cy.get("#Email").type(data.email);
      cy.get("#Password").type(data.password);
      cy.get(".login-button").click();
      cy.get("[href='/customer/info']").should(
        "contain.text",
        "yo_hanna_ms@yahoo.com"
      );
    });
  });
});
