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
  real += num1.imaginary * num2.imaginary * -1;
  let imaginary = num1.real * num2.imaginary;
  imaginary += num1.imaginary * num2.real;

  return {real, imaginary};
};

const display = function(complexNum) {
  return `${complexNum.real} + ${complexNum.imaginary}i`;
};

exports.add = add;
exports.multiply = multiply;
exports.display = display;
exports.getRealPart = getRealPart;
exports.getImaginaryPart = getImaginaryPart;
