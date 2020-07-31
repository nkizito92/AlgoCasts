// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, stair = "") {
    //  solution
    // const midpoint = Math.floor((2 * n - 1) / 2)
    //     for(row = 0; row < n; row++){
    //         let stair1 = ""
    //         for (col = 0; col < 2 * n - 1 ; col++){
    //             if(midpoint - row <= col && midpoint + row >= col){
    //                 stair1 += "#"
    //             }else 
    //             stair1 += " ";
    //         }
    //         console.log(stair1)
    //     }
    const midpoint = Math.floor((2 * n - 1) / 2)
    if (n === row) {
        return
    }

    if (stair.length === 2 * n - 1) {
        console.log(stair)
        return pyramid(n, row + 1)
    }
    if (midpoint - row <= stair.length && midpoint + row >= stair.length) {
        stair += "#"
    } else {
        stair += " ";
    }
    return pyramid(n, row, stair)
}

module.exports = pyramid;
