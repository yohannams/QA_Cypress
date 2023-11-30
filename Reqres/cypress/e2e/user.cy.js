describe("Reqres API Testing", () => {
  it("get list user", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("create user", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: {
        name: "yohanna",
        job: "quality assurance",
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).has.property("name", "yohanna");
    });
  });
});
