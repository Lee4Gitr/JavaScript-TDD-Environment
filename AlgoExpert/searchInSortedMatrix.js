function searchInSortedMatrix(matrix, target) {
  let col = matrix[0].length - 1;
  let row = 0;

  while (matrix[row][col] !== target) {
    let num = matrix[row][col];
    if (row === matrix.length - 1 && col === 0) {
      return [-1, -1];
    }
    if (num > target) {
      if (col === 0) {
        row++;
        col = matrix[0].length - 1;
      } else {
        col--;
        continue;
      }
    }
    if (num < target) {
      row++;
      col = matrix[0].length - 1;
    }
  }
  return [row, col];
}

var matrix = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004],
]

var target = 44;

searchInSortedMatrix(matrix, target);