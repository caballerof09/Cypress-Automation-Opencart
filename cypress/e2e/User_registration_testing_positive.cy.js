describe("testing cart", () => {
  it("the user registration on the web cart", () => {
    cy.fixture("User_data").then((User_data) => {
      const { firstName, lastName, email, telephone, password } =
        User_data.data[0];
      //go to website
      cy.visit("https://opencart.abstracta.us/index.php");
      // click on my account button
      cy.get(".caret").click();
      //click on register button
      cy.get(".dropdown-menu > :nth-child(1) > a").click();
      //fill name field
      cy.get("#input-firstname").type(firstName);
      //fill lastname field
      cy.get("#input-lastname").type(lastName);
      //fill email field
      cy.get("#input-email").type(email);
      //fill telephone field
      cy.get("#input-telephone").type(telephone);
      //fill password field
      cy.get("#input-password").type(password);
      //fill confirm password field
      cy.get("#input-confirm").type(password);
      //click on agree checkbox
      cy.get("[type='checkbox']").click();
      //click continiue button
      cy.get("[type='submit']").click();
    });
  });
});
