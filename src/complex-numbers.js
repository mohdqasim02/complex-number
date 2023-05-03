const complexNumber = function({realPart, imaginaryPart}) {
  const getRealPart = function() {
    return realPart;
  };

  const getImaginaryPart = function() {
    return imaginaryPart;
  };

  const stringify = function() {
    if(realPart === 0) return `${imaginaryPart}i`;
    let operator = imaginaryPart > 0 ? '+' : '';
    return `${realPart}${operator}${imaginaryPart}i`;
  };

  const add = function(num) {
    return complexNumber({
      realPart: realPart + num.getRealPart(),
      imaginaryPart: imaginaryPart + num.getImaginaryPart()
    });
  };

  const multiply = function(num) {
    let real = realPart * num.getRealPart() - imaginaryPart * num.getImaginaryPart(); 
    let imaginary = realPart * num.getImaginaryPart() + imaginaryPart * num.getRealPart();

    return complexNumber({realPart: real, imaginaryPart: imaginary});
  };

  return {stringify, getImaginaryPart, getRealPart, add, multiply};
};

exports.create = complexNumber;
