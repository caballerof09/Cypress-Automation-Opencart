describe("checkAuthentication", function () {
  before(function () {
    cy.visit("https://opencart.abstracta.us/index.php");
  });

  beforeEach(function () {
    // "this" points at the test context object
    cy.fixture("User_data.json").then((User_data) => {
      // "this" is still the test context object
      this.User_data = User_data;
    });
  });

  it("it should fail if bad email", function () {
    // Note access via "this.user"

    cy.dataTestId("worker-email").type(this.user.incorrectEmail);
    cy.dataTestId("worker-password").type(this.user.incorrectPassword);
    cy.dataTestId("test-button").click();
    cy.dataTestId("test-wrong-message").should("have.text", " wrong email ");
  });
});
