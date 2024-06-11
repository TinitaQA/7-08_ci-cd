const tests = require("../fixtures/seats");
const selector = require("../fixtures/selectors");

describe("Бронирование мест на выбранный фильм", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  tests.forEach((test) => {
    it(test.name, () => {
      cy.get(selector.week).eq(5).click();
      cy.get(selector.movie).first().contains("13:00").click();
      test.data.forEach((seat) => {
        cy.get(
          `${selector.scheme}
          ${selector.seatPlace}(${seat.row})
          ${selector.seatPlace}(${seat.seat})`
          //`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
        ).click();
      });
      cy.get(selector.button).click();
      cy.contains("Вы выбрали билеты:").should("be.visible");
    });
  });
});
