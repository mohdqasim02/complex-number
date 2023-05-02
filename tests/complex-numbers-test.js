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
      deepStrictEqual(c1.add(c3), {real: 6, imaginary: 8});
    });

    it('should give sum', function() {
      deepStrictEqual(c3.add(c4), {real: 8, imaginary: -2});
    });
  });

  describe('multiply', function() {
    it('should give product', function() {
      deepStrictEqual(c1.multiply(c3), {real: -7, imaginary: 22});
    });

    it('should give product', function() {
      deepStrictEqual(c1.multiply(c2), {real: -9, imaginary: 6});
    });
  });

  describe('display', function() {
    it('should give a complex number in a string', function() {
      deepStrictEqual(c3.display(), '4 + 5i');
    });

    it('should give a complex number in a string', function() {
      deepStrictEqual(c2.display(), '3i');
    });

    it('should give a complex number in a string', function() {
      deepStrictEqual(c4.display(), '4 - 7i');
    });
  });
});
