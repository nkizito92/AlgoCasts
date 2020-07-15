// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // solution 1
    // const rev = str.split("").reverse().join("")
    // return rev2 === str

    // solution 2
    // let rev3 = str.split("").reduce((char, rev) => rev + char, "")
    // return rev3 === str

    // solution 3
    // let rev2 = ""
    // for(let char of str){
    //   rev2 = char + rev2
    // } 
    // return rev2 === str

    // solution 4
    return str.split("").every((char, i) => char === str[str.length -i -1])
}

module.exports = palindrome;
