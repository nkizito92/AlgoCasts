// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // solution 1
    // return str.split("").reverse().join("")

    // this works solution 3
    return str.split("").reduce((char, rev) => {return rev + char}, "")

    // solution 2
    // let revse = ""
    // for(let char of str){
    //     revse = char + revse
    // }
    // return revse
}

module.exports = reverse;
