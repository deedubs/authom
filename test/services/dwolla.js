var authom = require('../../')
  , expect = require('expect.js');
  
describe('Dwolla', function () {
  it('should be able to create a server', function () {
    var server = authom.createServer({service: 'dwolla'});

    expect(authom.servers['dwolla']).to.be(server);
  });
})
