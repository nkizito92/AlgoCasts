// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  const arr = [0, 1]
  for(let i = 2; i <= n; i++) {
      const a = arr[i - 1]
      const b = arr[i - 2]
    arr.push(a+b)
  }
  return arr[n]
}

// function fib(n) {
//     if (n < 2) return n; 
//     return fib(n-1) + fib(n-2)
//   }
  

module.exports = fib;
