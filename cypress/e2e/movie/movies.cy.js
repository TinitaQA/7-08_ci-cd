const tests = require("/cypress/fixtures/seats");
const selector = require("/cypress/fixtures/selectors");

beforeEach(() => {
  cy.visit("/");
});

describe("Отображение главной страницы", () => {
  it("Показывает количество дней", () => {
    cy.get(selector.week).should("have.length", 7);
  });

  it("Показывает наименование страницы", () => {
    cy.get(selector.title).should("contain", "Идёмвкино");
  });

  it("Показывает раздел фильмов", () => {
    cy.get(selector.movie).should("be.visible");
  });
});

describe("Бронирование мест на выбранный фильм", () => {
  tests.forEach((test) => {
    it(test.name, () => {
      cy.get(selector.week).eq(5).click();
      cy.get(selector.movie).first().contains("13:00").click();
      test.data.forEach((seat) => {
        cy.get(
          `${selector.scheme}
          ${selector.seatPlace}(${seat.row})
          ${selector.seatPlace}(${seat.seat})`
        ).click();
      });
      cy.get(selector.button).click();
      cy.contains("Вы выбрали билеты:").should("be.visible");
    });
  });
});
