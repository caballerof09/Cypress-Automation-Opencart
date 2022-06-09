describe("login", () => {
  it("the user login on the web cart after been registered", () => {
    cy.fixture("User_data").then((User_data) => {
      const { email, password } = User_data.data[0];
      //go to website
      cy.visit("https://opencart.abstracta.us/index.php");
      // click on my account button
      cy.get(".caret").click();
      //   //click on register button
      cy.get(".dropdown-menu > :nth-child(2) > a").click();
      //input correct email on the email field
      cy.get("#input-email").type(email);
      //input correct password on the password field
      //   //fill password field
      cy.get("#input-password").type(password);
      //click on login button
      cy.get("form > .btn").click();
    });
  });
});
