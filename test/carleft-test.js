const chai = require('chai');
const assert = chai.assert;

const CarLeft = require('../lib/carleft.js')

describe('carLeft', function(){
  context('with default attributes.', function(){
    var carleft = new CarLeft({});

    it('should assign an x coordinate', function() {
      assert.equal(this.x);
    });

    it('should assign a y coordinate', function() {
      assert.equal(this.y);
    });

    it('should assign a height', function(){
      assert.equal(this.height);
    });

    it('should assign a width', function(){
      assert.equal(this.width);
    });
  });
});
