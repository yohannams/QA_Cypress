class Login {
  visit() {
    cy.visit("/");
    cy.get('[href="/login"]').click();
  }

  fillEmail(email) {
    cy.get("#Email").type(email);
  }

  fillPassword(password) {
    cy.get("#Password").type(password);
  }

  clickLoginButton() {
    cy.get(".login-button").click();
  }
}

export default new Login();
