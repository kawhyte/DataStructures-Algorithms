// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const result =[];

    for (let index = 0; index < n; index++) {
      result.push([]);
        
    }
    let counter = 1;

    let startColumn = 0;
    let endColumn = n-1;
    let starRow = 0;
    let endRow = n-1;

    while (startColumn <= endColumn  && starRow <= endRow) {
        
    }

    
}

module.exports = matrix;
