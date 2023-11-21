describe("Gorest API Testing", () => {
  it("create user", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization:
          "Bearer 77f620256f1a2d5107b0eee6b230dda907a972b58edbef1b0d353c63850574e5",
      },
      body: {
        name: "yohanna",
        email: "yos@gmail.com",
        gender: "female",
        status: "active",
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).has.property("name", "yohanna");
    });
  });
});
