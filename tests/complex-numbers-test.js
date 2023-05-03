const {it, describe} = require('node:test');
const {strictEqual, deepStrictEqual} = require('assert');
const {complexNumber} = require('../src/complex-numbers.js');

describe('complexNumber', function() {
  describe('getRealPart', function() {
    const c1 = complexNumber(2, 3);
    const c2 = complexNumber(0, 3);

    it('should give real part', function() {
      strictEqual(c1.getRealPart(), 2);
    });

    it('should give real part', function() {
      strictEqual(c2.getRealPart(), 0);
    });
  });

  describe('getImaginaryPart', function() {
    const c1 = complexNumber(2, 3);
    const c2 = complexNumber(4, 5);

    it('should give Imaginary part', function() {
      strictEqual(c1.getImaginaryPart(), 3);
    });

    it('should give Imaginary part', function() {
      strictEqual(c2.getImaginaryPart(), 5);
    });
  });

  describe('add', function() {
    const c1 = complexNumber(2, 3);
    const c2 = complexNumber(4, 5);
    const c3 = complexNumber(4, -7);

    it('should give sum', function() {
      deepStrictEqual(c1.add(c2).getComplexNum(), '6+8i');
    });

    it('should give sum', function() {
      deepStrictEqual(c2.add(c3).getComplexNum(), '8-2i');
    });
  });

  describe('multiply', function() {
    const c1 = complexNumber(2, 3);
    const c2 = complexNumber(4, 5);
    const c3 = complexNumber(4, -7);

    it('should give product', function() {
      deepStrictEqual(c1.multiply(c2).getComplexNum(), '-7+22i');
    });

    it('should give product', function() {
      deepStrictEqual(c3.multiply(c1).getComplexNum(), '29-2i');
    });
  });

  describe('getComplexNum', function() {
    const c1 = complexNumber(4, 5);
    const c2 = complexNumber(0, 3);
    const c3 = complexNumber(4, -7);

    it('should give a complex number in a string', function() {
      deepStrictEqual(c1.getComplexNum(), '4+5i');
    });

    it('should give a complex number in a string', function() {
      deepStrictEqual(c2.getComplexNum(), '3i');
    });

    it('should give a complex number in a string', function() {
      deepStrictEqual(c3.getComplexNum(), '4-7i');
    });
  });
});
