let mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];

let r = 42;
let c = 5;

function matrixReshape(mat, r, c) {
  const rows = mat.length;
  const cols = mat[0].length;

  let subArray = [];
  let newMat = [];

  if (cols * rows !== c && cols * rows !== r) {
    return mat;
  }

  const db = mat.flat();

  let elementsPerRow = db.length / r;
  console.log(elementsPerRow);

  for (let i = 0; i < db.length; i++) {
    subArray.push(db[i]);

    if (subArray.length === elementsPerRow) {
      newMat.push(subArray);
      subArray = [];
    }
  }

  return newMat;
}

console.log(matrixReshape(mat, r, c));
