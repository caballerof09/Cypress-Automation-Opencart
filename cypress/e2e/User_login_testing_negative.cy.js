describe("login", () => {
  it("the user login on the web cart with wrong credentials ", () => {
    cy.fixture("User_data").then((User_data) => {
      const { email, password } = User_data.data[0];
      // leaving the email field empty
      //go to website
      cy.visit("https://opencart.abstracta.us/index.php");
      // click on my account button
      cy.get(".caret").click();
      //click on login button
      cy.get(".dropdown-menu > :nth-child(2) > a").click();
      // email field empty
      //input correct password on the password field
      //fill password field
      cy.get("#input-password").type(password);
      //click on login button
      cy.get("form > .btn").click();
    });
    // leaving the password field empty
    cy.fixture("User_data").then((User_data) => {
      const { email, password } = User_data.data[0];
      //go to website
      cy.visit("https://opencart.abstracta.us/index.php");
      // click on my account button
      cy.get(".caret").click();
      //click on login button
      cy.get(".dropdown-menu > :nth-child(2) > a").click();
      //input correct email on the email field
      cy.get("#input-email").type(email);
      //input correct password on the password field
      //password field empty
      //click on login button
      cy.get("form > .btn").click();
    });
    // input a wrong email on the email field
    cy.fixture("User_data").then((User_data) => {
      const { fakeEmail, password } = User_data.fakeData[0];
      //go to website
      cy.visit("https://opencart.abstracta.us/index.php");
      // click on my account button
      cy.get(".caret").click();
      //click on login button
      cy.get(".dropdown-menu > :nth-child(2) > a").click();
      //input wrong email on the email field
      cy.get("#input-email").type(fakeEmail);
      //input correct password on the password field
      //fill password field
      cy.get("#input-password").type(password);
      //click on login button
      cy.get("form > .btn").click();
    });
    // input a wrong password on the email field
    cy.fixture("User_data").then((User_data) => {
      const { email, fakePassword } = User_data.fakeData[0];
      //go to website
      cy.visit("https://opencart.abstracta.us/index.php");
      // click on my account button
      cy.get(".caret").click();
      //click on login button
      cy.get(".dropdown-menu > :nth-child(2) > a").click();
      //input registred email on the email field
      cy.get("#input-email").type(email);
      //input wrong password on the password field
      cy.get("#input-password").type(fakePassword);
      //click on login button
      cy.get("form > .btn").click();
    });
  });
});
