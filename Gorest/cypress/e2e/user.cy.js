// orange HRM

describe("user spec", () => {
  it("search user success", () => {
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
    cy.get(":nth-child(2) > .oxd-input").type("Odis.Adalwin");
    cy.get(".oxd-autocomplete-text-input > input").type("Odis");
    cy.wait(3000);
    cy.get(".oxd-autocomplete-option").click();
    cy.get(".oxd-form-actions > .oxd-button--secondary").click({ force: true });
    cy.get(".oxd-table-card > .oxd-table-row > :nth-child(2) > div").should(
      "have.text",
      "Odis.Adalwin"
    );
    cy.get(".oxd-table-card > .oxd-table-row").should("have.length", 1);
  });

  it("search user failed", () => {
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
    cy.get(":nth-child(2) > .oxd-input").type("asd");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
    cy.get(".oxd-form-actions > .oxd-button--secondary").click({ force: true });
    cy.get(".orangehrm-horizontal-padding > .oxd-text").should(
      "have.text",
      "No Records Found"
    );
    cy.get(".oxd-table-card > .oxd-table-row").should("have.length", 0);
  });
});
