const log = require("../fixtures/login");
const selector = require("../fixtures/selectors");

describe("Логин в кабинет администратора", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });

  it("Логин зарегистрированного администратора", () => {
    cy.login(log.validEmail, log.validPassword);
    cy.get(selector.adminTitle).should("contain", "Администраторррская");
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
