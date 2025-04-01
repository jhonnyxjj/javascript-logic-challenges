function calculateOddOrEven(num) {
  let result = 0;
  if (num % 2 !== 0 && num < 27 || num % 2 === 0 && num >= 10 && num < 20) {
    num *= num;
  } if (num % 2 !== 0 && num % 3 === 0) {
    num += 9;
  } if (num % 2 === 0 && num % 6 === 0 || num % 12 === 0) {
    num += 27;
  } if (num < 0) {
    num -= 2;
  } if (num === 42 || num === -42) {
    num = 0;
  }

  result += num;
  return result;
}



function crazyMatrix(matrix) {
  let total = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      total += calculateOddOrEven(matrix[i][j]);
    }
  }
  return total;
}
module.exports = {
  crazyMatrix,
  calculateOddOrEven,
};

