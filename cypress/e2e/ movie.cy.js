import tests from '../fixtures/movie.json'

describe('Тестирование бронирования билетов', () => {
  beforeEach(() =>{
    cy.visit('https://qamid.tmweb.ru/client/index.php');
  })
  it('Проверка недели на 7 дней', () => {
    tests.forEach((test) =>{
      cy.get(`${test.selectorDays}`).should("have.length",7);
      cy.contains(`${test.assert}`).should('be.visible', true)
    })
  })
})

