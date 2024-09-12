import tests from '../fixtures/admin.json';

describe.only('Тестирование бронирования билетов', () => {
  beforeEach(() =>{
    cy.visit('http://qamid.tmweb.ru/admin');
  })

  tests.forEach((test) =>{
    it(test.name, () =>{
      test.data.forEach((admin) =>{
        cy.login(`${admin.login}`, `${admin.password}`)
        cy.contains(`${admin.assert}`).should('be.visible', true);
        cy.contains(`${admin.assert}`).should('be.visible', true);
      })
    })
  })
})


