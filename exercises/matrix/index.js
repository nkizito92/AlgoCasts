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
    const results = [];
    for (let i = 0; i < n; i++) {
        results.push([])
    }
    let counter = 1; 
    let startColumn = 0;
    let startRow = 0;
    let endCol = n - 1
    let endRow = n - 1;
    let resultArrSet = (ele, num) => {
        results[ele][num] = counter 
        counter++
    }
    while(startColumn <= endCol && startRow <= endRow) {
        // Top row
        for(let i = startColumn; i <= endCol; i++){
            // results[startRow][i] = counter;
            // counter++;
            resultArrSet(startRow, i)
        }
        startRow++;

        // right column
        for(let j = startRow; j <= endRow; j++){
            // results[j][endCol]= counter;
            // counter++;
            resultArrSet(j, endCol)
        }
        endCol--;

        // bottom row

        for(let x = endCol; x >= startColumn; x--) {
            // results[endRow][x] = counter;
            // counter++
            resultArrSet(endRow, x)
        }
        endRow--;

        // start column 

        for(let c = endRow; c >= startRow; c--){
            // results[c][startColumn] = counter;
            // counter++;
            resultArrSet(c, startColumn)
        }
        startColumn++;
    }
   
    return results;
}

module.exports = matrix;
