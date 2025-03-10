m = [
  [1, 2, -1],
  [4, -1, 6],
  [7, 8, 9],
];

m2 = [
  [3, -1],
  [5, 2],
];

m4 = [
  [-1, 0, 0, 2, 2],
  [2, 0, 0, 2, 1],
  [4, 3, 2, 1, 1],
  [-1, -1, 0, 2, 4],
  [1, 0, 3, -1, 0],
];

function modifiedMatrix(matrix) {
  let r = matrix.length;
  let c = matrix[0].length;

  for (let columnPointer = 0; columnPointer < c; columnPointer++) {
    let maxValue = 0;

    for (let i = 0; i < r; i++) {
      if (matrix[i][columnPointer] !== -1) {
        maxValue = Math.max(maxValue, matrix[i][columnPointer]);
      }
    }

    for (let i = 0; i < r; i++) {
      if (matrix[i][columnPointer] === -1) {
        matrix[i][columnPointer] = maxValue;
      }
    }
  }

  return matrix;
}

console.log(modifiedMatrix(m4));
