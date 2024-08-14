

describe('User Tests', () => {
  
  it('Get User Info', () => {
    cy.request('GET', 'https://petstore.swagger.io/v2/user/login?username=hacer01&password=abc123')
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  })
 
  it('Create User', () => {
  cy.request('POST', 'https://petstore.swagger.io/v2/user')
  .then((response) => {
    expect(response.status).to.eq(200)

  })
 })

  it('Create User', () => {
   const postData={
     "id": 1,
     "username": "hacer01",
     "firstName": "hacer",
     "lastName": "yalcin",
     "email": "haceryn@gmail.com",
     "password": "abc1234",
     "phone": "0555555555",
     "userStatus": 0
    }
    cy.reguest({ 
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user',
      body: postData
    })
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  })
  it('Delete', () => {
    cy.request('DELETE', 'https://petstore.swagger.io/v2/user')
    .then((response) => {
      expect(response.status).to.eq(400)
    })
  })
})
  



  



  
   