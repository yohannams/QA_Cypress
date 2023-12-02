import Register from "../support/page-objects/register";

let email;
let emailArr = [];

const randomEmail = () => {
  const randomId = () => Cypress._.random(0, 1e6);
  const id = randomId();
  email = `email_${id}@example.com`;
  emailArr.push(email);
};

describe("register", () => {
  beforeEach(() => {
    cy.visit("/");
    randomEmail();
  });

  it("success register random email", () => {
    cy.get('[href="/register"]').click();
    cy.get("#gender-female").check();
    cy.get("#FirstName").type("Yohanna");
    cy.get("#LastName").type("Santoso");
    cy.get("#Email").type(email);
    cy.get("#Password").type("123456");
    cy.get("#ConfirmPassword").type("123456");
    cy.get("#register-button").click();
    cy.get(".result").should("contain.text", "Your registration completed");
    cy.get(".register-continue-button").should("exist").click();
    cy.get("[href='/customer/info']").should("contain.text", email);
  });

  it("success register", () => {
    cy.get('[href="/register"]').click();
    cy.get("#gender-female").check();
    cy.get("#FirstName").type("Yohanna");
    cy.get("#LastName").type("Santoso");
    cy.get("#Email").type(email);
    cy.get("#Password").type("123456");
    cy.get("#ConfirmPassword").type("123456");
    cy.get("#register-button").click();
    cy.get(".result").should("contain.text", "Your registration completed");
    cy.get(".register-continue-button").should("exist").click();
    cy.get("[href='/customer/info']").should("contain.text", email);
  });

  it("success register - gender is not selected", () => {
    cy.get('[href="/register"]').click();
    cy.get("#FirstName").type("Yohanna");
    cy.get("#LastName").type("Santoso");
    cy.get("#Email").type(email);
    cy.get("#Password").type("123456");
    cy.get("#ConfirmPassword").type("123456");
    cy.get("#register-button").click();
    cy.get(".result").should("contain.text", "Your registration completed");
    cy.get(".register-continue-button").should("exist").click();
    cy.get("[href='/customer/info']").should("contain.text", email);
  });

  it("failed register - empty last name", () => {
    cy.get('[href="/register"]').click();
    cy.get("#gender-female").check();
    cy.get("#FirstName").type("Yohanna");
    cy.get("#Email").type(email);
    cy.get("#Password").type("123456");
    cy.get("#ConfirmPassword").type("123456");
    cy.get("#register-button").click();
    cy.get("span[for='LastName']").should(
      "contain.text",
      "Last name is required."
    );
  });

  it("failed register - password not match", () => {
    cy.get('[href="/register"]').click();
    cy.get("#gender-female").check();
    cy.get("#FirstName").type("Yohanna");
    cy.get("#LastName").type("Santoso");
    cy.get("#Email").type(email);
    cy.get("#Password").type("123456");
    cy.get("#ConfirmPassword").type("1234567");
    cy.get("#register-button").click();
    cy.get("span[for='ConfirmPassword']").should(
      "contain.text",
      "The password and confirmation password do not match."
    );
  });

  it("failed register - password not eligible and not match", () => {
    cy.get('[href="/register"]').click();
    cy.get("#gender-female").check();
    cy.get("#FirstName").type("Yohanna");
    cy.get("#LastName").type("Santoso");
    cy.get("#Email").type(email);
    cy.get("#Password").type("123");
    cy.get("#ConfirmPassword").type("1234567");
    cy.get("#register-button").click();
    cy.get("span[for='Password']").should(
      "contain.text",
      "The password should have at least 6 characters."
    );
    cy.get("span[for='ConfirmPassword']").should(
      "contain.text",
      "The password and confirmation password do not match."
    );
  });
});

describe("Register using POM", () => {
  it("Success Register", () => {
    Register.visit();
    Register.fillFirstName("Yohanna");
    Register.fillLastName("Santoso");
    Register.fillEmail(email);
    Register.fillPassword("123456");
    Register.fillConfirmPassword("123456");
    Register.clickRegisterButton();
    cy.get("[href='/customer/info']").should("contain.text", email);
  });
});

export { emailArr };
