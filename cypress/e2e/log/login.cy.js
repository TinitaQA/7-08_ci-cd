const log = require("/cypress/fixtures/login");
const selector = require("/cypress/fixtures/selectors");

beforeEach(() => {
  cy.visit("/admin");
});

it("Логин в кабинет администратора", () => {
  cy.login(log.validEmail, log.validPassword);
  cy.contains("Администраторррская").should("be.visible");
  //cy.get(selector.adminTitle).should("contain", "Администраторррская");
});
