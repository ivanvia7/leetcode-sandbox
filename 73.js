var setZeroes = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let firstRowHasZero = false;
  let firstColHasZero = false;

  // Step 1: Check if first row or first column has any zero
  for (let r = 0; r < rows; r++) {
    if (matrix[r][0] === 0) firstColHasZero = true;
  }
  for (let c = 0; c < cols; c++) {
    if (matrix[0][c] === 0) firstRowHasZero = true;
  }

  // Step 2: Use first row and column to mark zero positions
  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      if (matrix[r][c] === 0) {
        matrix[r][0] = 0;
        matrix[0][c] = 0;
      }
    }
  }

  // Step 3: Zero out cells based on markers in first row and column
  for (let r = 1; r < rows; r++) {
    if (matrix[r][0] === 0) {
      matrix[r].fill(0);
    }
  }
  for (let c = 1; c < cols; c++) {
    if (matrix[0][c] === 0) {
      for (let r = 0; r < rows; r++) {
        matrix[r][c] = 0;
      }
    }
  }

  // Step 4: Zero out the first row/column if necessary
  if (firstColHasZero) {
    for (let r = 0; r < rows; r++) {
      matrix[r][0] = 0;
    }
  }
  if (firstRowHasZero) {
    matrix[0].fill(0);
  }
};
