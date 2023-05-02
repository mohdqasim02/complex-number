const {it, describe} = require('node:test');
const {strictEqual, deepStrictEqual} = require('assert');
const {getRealPart, getImaginaryPart, add, multiply, display} = require('../src/complex-numbers.js');

describe('complex-numbers', function() {
  describe('getRealPart', function() {
    it('should give real part', function() {
      strictEqual(getRealPart({real: 2, imaginary: 3}), 2);
    });

    it('should give real part', function() {
      strictEqual(getRealPart({real: 0, imaginary: 3}), 0);
    });
  });

  describe('getImaginaryPart', function() {
    it('should give Imaginary part', function() {
      strictEqual(getImaginaryPart({real: 2, imaginary: 3}), 3);
    });

    it('should give Imaginary part', function() {
      strictEqual(getImaginaryPart({real: 0, imaginary: 3}), 3);
    });
  });

  describe('add', function() {
    it('should give sum', function() {
      deepStrictEqual(add({real: 2, imaginary: 3}, {real: 4, imaginary: 5}), {real: 6, imaginary: 8});
    });
  });

  describe('multiply', function() {
    it('should give product', function() {
      deepStrictEqual(multiply({real: 2, imaginary: 3}, {real: 1, imaginary: 2}), {real: -4, imaginary: 7});
    });
  });

  describe('display', function() {
    it('should display', function() {
      deepStrictEqual(display({real: 4, imaginary: 5}), '4 + 5i');
    });
  });
});
