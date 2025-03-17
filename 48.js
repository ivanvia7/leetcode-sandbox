var rotate = function (matrix) {
  let cols = matrix[0].length;
  let rows = matrix.length;
  let transposed = [];

  for (let c = 0; c < cols; c++) {
    transposed[c] = [];
    for (let r = 0; r < rows; r++) {
      transposed[c][r] = matrix[r][c];
    }
  }

  return transposed.map((arr) => arr.reverse());
};

let m = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotate(m));
