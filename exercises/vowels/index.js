// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vowelCount = 0
    const vow = ["a", "e", "i", "o", "u"]
    for (let eChar of str.toLowerCase()) {
        if (vow.includes(eChar)) {
            vowelCount++
        } else ( 
            
            vowelCount * 0
        )
    }
    return vowelCount
}

module.exports = vowels;
