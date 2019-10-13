function calculatePascalsTriangle(numberOfRows) {
  let triangle = [];

  // create empty rows
  for (let row = 0; row < numberOfRows; row++) {
    triangle.push(new Array(row + 1).fill(1));
  }

  //logic to create values for other numbers
  for (let row = 0; row < numberOfRows; row++) {
    for (let i = 0; i < triangle[row].length; i++) {
      if (i !== 0 && i !== triangle[row].length - 1) {
        triangle[row][i] = triangle[row - 1][i - 1] + triangle[row - 1][i];
      }
    }
  }

  return triangle;
}

export default calculatePascalsTriangle;
