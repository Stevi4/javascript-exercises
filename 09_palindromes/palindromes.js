const palindromes = function (str) {
  const chars = str
    .toLowerCase()
    .split("")
    .filter(
      (char) => (char >= "a" && char <= "z") || (char >= "0" && char <= "9")
    );
  const reverse = [...chars].reverse();
  return chars.every((char, index) => (char === reverse[index]));
};

// Do not edit below this line
module.exports = palindromes;
