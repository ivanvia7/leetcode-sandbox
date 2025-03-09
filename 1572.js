mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

mat3 = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

mat2 = [
  [1, 2, 3, 4, 5],
  [4, 5, 6, 4, 5],
  [7, 8, 9, 4, 5],
  [7, 8, 9, 4, 5],
  [7, 8, 9, 4, 5],
];

mat5 = [[5]];

function diagonalSum(mat) {
  let rows = mat.length;

  let sum = 0;

  //counting the primary diagonal
  for (let i = 0; i < rows; i++) {
    let numberPrimary = mat[i][i];
    let numberSecondary = mat[mat.length - 1 - i][i];

    sum += numberPrimary + numberSecondary;
  }

  if (!Number.isInteger(rows / 2)) {
    return sum - mat[Math.ceil(rows / 2) - 1][Math.ceil(mat[0].length / 2) - 1];
  } else {
    return sum;
  }
}

console.log(diagonalSum(mat5));
