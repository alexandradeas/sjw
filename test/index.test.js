var assert = require('assert');
var normalizeFormResponse = require('../src')._normalizeFormResponse;

describe('normalize', function() {
  function makeAssertion(output) {
    return function(input) {
      assert.equal(normalizeFormResponse(input).normalized, output);
    }
  };

  it('should return a NormalizedResponse', function() {
    var response = normalizeFormResponse('Man');
    assert.equal(response.raw, 'Man');
    assert.equal(response.normalized, 'Man');
  });

  it('should normalize female responses', function() {
    var womanAssertion = makeAssertion('Woman');

    womanAssertion('female');
    womanAssertion('Female');
    womanAssertion(' female');
    womanAssertion('female ');
    womanAssertion(' female ');
    womanAssertion('transwoman');
    womanAssertion('transgender woman');
  })

  it('should normalize male responses', function() {
    var manAssertion = makeAssertion('Man');

    manAssertion('male');
    manAssertion('Male');
    manAssertion(' male');
    manAssertion('male ');
    manAssertion(' male ');
    manAssertion('transman');
    manAssertion('transgender man');
  });
});

