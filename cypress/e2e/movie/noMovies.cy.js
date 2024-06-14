const selector = require("/cypress/fixtures/selectors");

beforeEach(() => {
  cy.visit("/");
});

it("Покупка уже забронированного билета", () => {
  cy.get(selector.week).eq(2).click();
  cy.get(selector.movie).contains("13:00").click();
  cy.get(selector.seatPlace2).click();
  cy.get(selector.button).should("be.disabled");
});
