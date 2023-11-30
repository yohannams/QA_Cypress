class Register {
  visit() {
    cy.visit("/");
    cy.get('[href="/register"]').click();
  }

  fillFirstName(firstName) {
    cy.get("#FirstName").type(firstName);
  }

  fillLastName(lastName) {
    cy.get("#LastName").type(lastName);
  }

  fillEmail(email) {
    cy.get("#Email").type(email);
  }

  fillPassword(password) {
    cy.get("#Password").type(password);
  }

  fillConfirmPassword(confirmPassword) {
    cy.get("#ConfirmPassword").type(confirmPassword);
  }

  clickRegisterButton() {
    cy.get("#register-button").click();
  }
}

export default new Register();
