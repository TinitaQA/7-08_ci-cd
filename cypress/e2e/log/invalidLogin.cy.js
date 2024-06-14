const log = require("/cypress/fixtures/login");
const selector = require("/cypress/fixtures/selectors");

describe("Логин в кабинет администратора", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });

  it("Логин незарегистрированного администратора", () => {
    cy.login(log.invalidEmail, log.invalidPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });

  it("Пустое имя пользователя", () => {
    cy.login(null, log.validPassword);
    cy.validation(selector.emailField);
  });

  it("Пустой пароль", () => {
    cy.login(log.validEmail, null);
    cy.validation(selector.passField);
  });
});
