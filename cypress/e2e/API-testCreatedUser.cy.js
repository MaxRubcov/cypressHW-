describe('Created user object', () => {
  it('Created user object', () => {
    cy.request('POST', '/user', {
      "id": 9999999,
      "username": "user1",
      "firstName": "",
      "lastName": "",
      "email": "",
      "password": "qwerty",
      "phone": "",
      "userStatus": 1
    }).then((response) =>{
      expect(response.status).to.eq(200)
      expect(response.body).to.eqls({
        "code": 200,
        "type": "unknown",
        "message": "9999999",
      })
      })
    cy.request('PUT', '/user/user1',{
      "id": 111111111,
      "username": "user1",
      "firstName": "",
      "lastName": "",
      "email": "",
      "password": "qwerty",
      "phone": "",
      "userStatus": 1
    }).then((response) =>{
      expect(response.status).to.eq(200)
      })
    cy.request('DELETE', '/user/user1').then((response) =>{
      expect(response.status).to.eq(200)
    })
    cy.request('GET', '/user/user1').then((response) =>{
    expect(response.status).to.eq(200)
    })
  })
})