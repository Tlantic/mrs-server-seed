var should = require('should'); 
var request = require('supertest');
var config = require('./utils/config/env/development')

describe('api', function() {
  var url = 'http://localhost:'+config.port+'/'+config.serviceName;

  before(function(done) {                     
    done();
  });

  describe('user/all', function() {
    it('should return error if getAll failed', function(done) {
    request(url)
    .get('/user/all')
    .end(function(err, res) {
          if (err) {
            throw err;
          }
          res.body.should.be.instanceof(Array);
          done();
        });
    });

  });
});