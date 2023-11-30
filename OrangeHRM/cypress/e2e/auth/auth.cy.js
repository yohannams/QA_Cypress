describe("auth spec", () => {
  it("login success", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });
  it("login failed - invalid password", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin");
    cy.get(".oxd-button").click();
    cy.get(".oxd-alert-content").should("have.text", "Invalid credentials");
  });
  it("login failed - invalid username, password", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin");
    cy.get(".oxd-button").click();
    cy.get(".oxd-alert-content").should("have.text", "Invalid credentials");
  });
  it("login failed - empty password", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(".oxd-button").click();
    cy.get(".oxd-input-group > .oxd-text").should("have.text", "Required");
  });
  it("logout success", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
    cy.get(".oxd-userdropdown-tab").click();
    cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });
});
