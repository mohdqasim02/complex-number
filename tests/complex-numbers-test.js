const {it, describe} = require('node:test');
const {strictEqual} = require('assert');
const {getRealPart, getImaginaryPart} = require('../src/complex-numbers.js');

describe('complex-numbers', function() {
  describe('getRealPart', function() {
    it('should give real part', function() {
      strictEqual(getRealPart({
        real: 2,
        imaginary: 3,
      }), 2);
    });

    it('should give real part', function() {
      strictEqual(getRealPart({
        real: 0,
        imaginary: 3,
      }), 0);
    });
  });

  describe('getImaginaryPart', function() {
    it('should give Imaginary part', function() {
      strictEqual(getImaginaryPart({
        real: 2,
        imaginary: 3,
      }), 3);
    });

    it('should give Imaginary part', function() {
      strictEqual(getImaginaryPart({
        real: 0,
        imaginary: 3,
      }), 3);
    });
  });
});
