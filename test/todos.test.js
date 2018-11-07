var chai = require('chai')
var expect = chai.expect
var supertest = require('supertest')

var api = supertest('http://todos.demo.rootpath.io/')

describe('GET', () => {
    it('returns a 200 status code', (done) => {
        api
            .get('/todos')
            .expect(200)
            .end(done)
    })

    it('should return the todo id', (done) => {
        api
            .get('todos/todo/16293')
            .expect((response) => expect(response.body.id).to.be.a('number'))
            .end(done)
    })
})
