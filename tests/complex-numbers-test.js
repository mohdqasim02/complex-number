const {it, describe} = require('node:test');
const {strictEqual, deepStrictEqual} = require('assert');
const complexNumber = require('../src/complex-numbers.js');

describe('complexNumber', function() {
  const c1 = complexNumber.create({realPart: 2, imaginaryPart: 3});
  const c2 = complexNumber.create({realPart: 0, imaginaryPart: 3});
  const c3 = complexNumber.create({realPart: 4, imaginaryPart: 5});
  const c4 = complexNumber.create({realPart: 4, imaginaryPart: -7});

  describe('getRealPart', function() {
    it('should give real part', function() {
      strictEqual(c1.getRealPart(), 2);
    });

    it('should give real part', function() {
      strictEqual(c2.getRealPart(), 0);
    });
  });

  describe('getImaginaryPart', function() {
    it('should give Imaginary part', function() {
      strictEqual(c1.getImaginaryPart(), 3);
    });

    it('should give Imaginary part', function() {
      strictEqual(c3.getImaginaryPart(), 5);
    });
  });

  describe('add', function() {
    it('should give sum', function() {
      deepStrictEqual(c1.add(c3).stringify(), '6+8i');
    });

    it('should give sum', function() {
      deepStrictEqual(c3.add(c4).stringify(), '8-2i');
    });
  });

  describe('multiply', function() {
    it('should give product', function() {
      deepStrictEqual(c1.multiply(c3).stringify(), '-7+22i');
    });

    it('should give product', function() {
      deepStrictEqual(c1.multiply(c2).stringify(), '-9+6i');
    });
  });

  describe('stringify', function() {
    it('should give a complex number in a string', function() {
      deepStrictEqual(c3.stringify(), '4+5i');
    });

    it('should give a complex number in a string', function() {
      deepStrictEqual(c2.stringify(), '3i');
    });

    it('should give a complex number in a string', function() {
      deepStrictEqual(c4.stringify(), '4-7i');
    });
  });
});
