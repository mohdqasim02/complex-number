const complexNumber = function({realPart, imaginaryPart}) {
  const iotaSq = -1;

  const getRealPart = function() {
    return realPart;
  };

  const getImaginaryPart = function() {
    return imaginaryPart;
  };

  const display = function() {
    if(realPart === 0) return `${imaginaryPart}i`;
    let imaginary = imaginaryPart;
    let operator = '+';

    if(imaginaryPart < 0) {
      imaginary = imaginaryPart * -1;
      operator = '-';
    }
    return `${realPart} ${operator} ${imaginary}i`;
  };

  const add = function(complexNumber) {
    return {
      real: realPart + complexNumber.getRealPart(),
      imaginary: imaginaryPart + complexNumber.getImaginaryPart()
    };
  };

  const multiply = function(complexNumber) {
    let real = realPart * complexNumber.getRealPart();
    let imaginary = realPart * complexNumber.getImaginaryPart();

    real += imaginaryPart * complexNumber.getImaginaryPart() * iotaSq;
    imaginary += imaginaryPart * complexNumber.getRealPart();

    return {real, imaginary};
  };

  return {display, getImaginaryPart, getRealPart, add, multiply};
};

exports.create = complexNumber;
