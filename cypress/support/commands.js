Cypress.Commands.add("loginWith", ({ email, password }) =>
  cy
    .visit("/login")
    .findByPlaceholderText(/email/)
    .type(email)
    .findByPlaceholderText(/password/)
    .type(password)
    .findByText("Log in")
    .click()
);
