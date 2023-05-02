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

  const add = function(num) {
    return complexNumber({
      realPart: realPart + num.getRealPart(),
      imaginaryPart: imaginaryPart + num.getImaginaryPart()
    });
  };

  const multiply = function(num) {
    let real = realPart * num.getRealPart();
    let imaginary = realPart * num.getImaginaryPart();

    real += imaginaryPart * num.getImaginaryPart() * iotaSq;
    imaginary += imaginaryPart * num.getRealPart();

    return complexNumber({realPart: real, imaginaryPart: imaginary});
  };

  return {display, getImaginaryPart, getRealPart, add, multiply};
};

exports.create = complexNumber;
