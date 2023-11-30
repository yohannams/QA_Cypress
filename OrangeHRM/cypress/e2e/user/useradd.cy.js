describe("user add spec", () => {
  it("add user success", () => {
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
    cy.get(":nth-child(1) > .oxd-main-menu-item").click();
    cy.get(".--visited > .oxd-topbar-body-nav-tab-item").click();
    cy.get(".oxd-dropdown-menu > li").click();
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.get(".oxd-select-dropdown > :nth-child(3)").click(); //user role
    cy.get(".oxd-autocomplete-text-input > input").type("jane"); //employee name
    cy.wait(3000);
    cy.get(".oxd-autocomplete-option").click(); //select employee name
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click(); //status
    cy.get(".oxd-select-dropdown > :nth-child(2)").click(); //click status
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("asdasdas"); //username
    cy.get(
      ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Ess12345"); //password
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Ess12345"); //confirm password
    cy.get(".oxd-button--secondary").click({ force: true });
    cy.get(".oxd-text--toast-message").should(
      "have.text",
      "Successfully Saved"
    );
  });

  it("add user failed - duplicate data", () => {
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
    cy.get(":nth-child(1) > .oxd-main-menu-item").click();
    cy.get(".--visited > .oxd-topbar-body-nav-tab-item").click();
    cy.get(".oxd-dropdown-menu > li").click();
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.get(".oxd-select-dropdown > :nth-child(3)").click(); //user role
    cy.get(".oxd-autocomplete-text-input > input").type("jane"); //employee name
    cy.wait(3000);
    cy.get(".oxd-autocomplete-option").click(); //select employee name
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click(); //status
    cy.get(".oxd-select-dropdown > :nth-child(2)").click(); //click status
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("asdasdas"); //username
    cy.get(
      ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Ess12345"); //password
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Ess12345"); //confirm password
    cy.get(".oxd-button--secondary").click({ force: true });
    cy.get(".oxd-input-group > .oxd-text").should(
      "have.text",
      "Already exists"
    );
  });

  it.only("add user failed - empty username", () => {
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
    cy.get(":nth-child(1) > .oxd-main-menu-item").click();
    cy.get(".--visited > .oxd-topbar-body-nav-tab-item").click();
    cy.get(".oxd-dropdown-menu > li").click();
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.get(".oxd-select-dropdown > :nth-child(3)").click(); //user role
    cy.get(".oxd-autocomplete-text-input > input").type("jane"); //employee name
    cy.wait(3000);
    cy.get(".oxd-autocomplete-option").click(); //select employee name
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click(); //status
    cy.get(".oxd-select-dropdown > :nth-child(2)").click(); //click status
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(" "); //username
    cy.get(
      ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Ess12345"); //password
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Ess12345"); //confirm password
    cy.get(".oxd-button--secondary").click({ force: true });
    cy.get(".oxd-input-group > .oxd-text").should("have.text", "Required");
  });
});
