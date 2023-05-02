const complexNumber = function() {
  const iotaSq = -1;
};
const getRealPart = function(complexNum) {
  return complexNum.real;
};

const getImaginaryPart = function(complexNum) {
  return complexNum.imaginary;
};

const add = function(num1, num2) {
  return {
    real: num1.real + num2.real,
    imaginary: num1.imaginary + num2.imaginary
  };
};

const multiply = function(num1, num2) {
  let real = num1.real * num2.real;
  let imaginary = num1.real * num2.imaginary;

  real += num1.imaginary * num2.imaginary * -1;
  imaginary += num1.imaginary * num2.real;

  return {real, imaginary};
};

const display = function(complexNum) {
  if(complexNum.real === 0) return `${complexNum.imaginary}i`;
  let imaginaryPart = complexNum.imaginary;
  let operator = '+';

  if(complexNum.imaginary < 0) {
    imaginaryPart = imaginaryPart * -1;
    operator = '-';
  }
  return `${complexNum.real} ${operator} ${imaginaryPart}i`;
};

exports.add = add;
exports.multiply = multiply;
exports.display = display;
exports.getRealPart = getRealPart;
exports.getImaginaryPart = getImaginaryPart;
