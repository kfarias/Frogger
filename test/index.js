const chai = require('chai');
const assert = chai.assert;

const CarLeft = require('../lib/carleft.js')
const CarRight = require('../lib/carright.js')

//car left test

describe('carLeft', function(){
  context('with default attributes.')

  it('should assign an x coordinate', function() {
    assert.equal(carleft.x);
  });

  it('should assign a y coordinate', function() {
    assert.equal(carleft.y);
  });

  it('should assign a height', function(){
    assert.equal(carleft.height);
  });

  it('should assign a width', function(){
    assert.equal(carleft.width);
  });
});
