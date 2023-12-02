import Login from "../support/page-objects/login";
import { emailArr } from "./register.cy.js";

var emailToLogin;

describe("login", () => {
  beforeEach(() => {
    cy.visit("/");
    emailToLogin = emailArr[0];
  });

  it("success login", () => {
    cy.get('[href="/login"]').click();
    cy.get("#Email").type(emailToLogin);
    cy.get("#Password").type("123456");
    cy.get(".login-button").click();
    cy.get('div.header-links > ul > li > a[href="/customer/info"]').should(
      "contain.text",
      emailToLogin
    );
  });

  it("success login with checklist remember me", () => {
    cy.get('[href="/login"]').click();
    cy.get("#Email").type(emailToLogin);
    cy.get("#Password").type("123456");
    cy.get("#RememberMe").check();
    cy.get(".login-button").click();
    cy.get("[href='/customer/info']").should("contain.text", emailToLogin);
  });

  it("failed login - wrong password", () => {
    cy.get('[href="/login"]').click();
    cy.get("#Email").type(emailToLogin);
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
    Login.fillEmail(emailToLogin);
    Login.fillPassword("123456");
    Login.clickLoginButton();
    cy.get("[href='/customer/info']").should("contain.text", emailToLogin);
  });
});

describe("Login with custom command", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("success login", () => {
    cy.login(emailToLogin, "123456");
    cy.url().should("eq", "https://demowebshop.tricentis.com/");
  });
});

describe("Login using fixtures", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("success login", () => {
    cy.fixture("login.json").then((data) => {
      data = data[0];

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
