const sumAll = function (num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  } else if (num1 < 1 || num2 < 1) {
    return "ERROR";
  }


  const terms = Math.abs(num2 - num1) + 1;
  return (terms / 2) * (num1 + num2);
};

// Do not edit below this line
module.exports = sumAll;
