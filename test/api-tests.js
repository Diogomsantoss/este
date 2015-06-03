/**
 * Created by nathanleniz on 5/24/15.
 */
var supertest = require('supertest');
var api = supertest('http://localhost:8000');

describe('API', function() {
  describe('api/', function() {
    it('should respond with 200 status', function (done) {
      api.get('/api')
        .expect(200, 'Hello world!', done);
    });
  });

  describe('api/test', function() {
    it('should respond with 200 status', function(done){
      api.get('/api/test')
        .expect(200, done);
    })
  })
});
