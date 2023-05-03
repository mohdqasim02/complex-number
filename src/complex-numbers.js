const complexNumber = function(realPart, imaginaryPart) {
  const getRealPart = function() {
    return realPart;
  };

  const getImaginaryPart = function() {
    return imaginaryPart;
  };

  const getComplexNum = function() {
    if(realPart === 0) return `${imaginaryPart}i`;
    let operator = imaginaryPart > 0 ? '+' : '';
    return `${realPart}${operator}${imaginaryPart}i`;
  };

  const add = function(num) {
    const real = realPart + num.getRealPart();
    const imaginary = imaginaryPart + num.getImaginaryPart();

    return complexNumber(real, imaginary);
  };

  const multiply = function(num) {
    const real = realPart * num.getRealPart() - imaginaryPart * num.getImaginaryPart(); 
    const imaginary = realPart * num.getImaginaryPart() + imaginaryPart * num.getRealPart();

    return complexNumber(real, imaginary);
  };

  return {getComplexNum, getImaginaryPart, getRealPart, add, multiply};
};

exports.complexNumber = complexNumber;
