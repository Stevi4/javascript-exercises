const fibonacci = function (n) {
  if (n == 0) {
    return 0;
  } else if (n < 0) {
    return "OOPS";
  }

  let current = 1;
  let prev = 1;
  for (let i = 0; i < n - 2; i++) {
    let next = current + prev;
    prev = current;
    current = next;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
