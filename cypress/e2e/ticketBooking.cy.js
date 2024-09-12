import tests from '../fixtures/ticketBooking.json'

describe('Тестирование бронирования билетов', () => {
    beforeEach(() =>{
      cy.visit('https://qamid.tmweb.ru/admin/index.php');
    })
    it('Проверка недели на 7 дней', () => {
      tests.forEach((admin) =>{
        cy.login(`${admin.login}`, `${admin.password}`);
        cy.get(`${admin.selFilm}`).then(($el) => $el.textContent).should('have.text','Ведьмак'); 
        cy.get(`${admin.selFilm}`).invoke('text').then((text) => {
        cy.visit('https://qamid.tmweb.ru/client/index.php');
        cy.get(`${admin.selFilm1}`).should('have.text', text); 
        cy.get(`${admin.selDays}`).last().click();
        cy.get(`${admin.selTime}`).click();
        cy.get(`${admin.selPlace}`).click();
        cy.get(`${admin.selButton}`).click();
        cy.contains('Вы выбрали билеты').should('be.visible', true);
        
      })
    })
  })
})