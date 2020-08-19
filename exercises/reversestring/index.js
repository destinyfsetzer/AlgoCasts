// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION THREE -- REDUCE()
// function reverse(str) {
//     debugger;
//     return str.split('').reduce((reversed, char) => char + reversed, '')
// }
// reverse('hello')

// SOLUTION TWO -- ES6 FOR LOOP SYNTAX
// function reverse(str) {
//    let reversed = '';
//    // for a var declaration of the iterable object we want to iterate through (in this case all the chars of the string)
//    for ( let char of str){
//   // take that character and add it on to the start of the string "reversed"
//        reversed = char + reversed;
//    }
//    // after every loop return the string reversed
//    return reversed
// }

// SOLUTION ONE -- MY PREFERRED SOLUTION
function reverse(str) {
    // turn string into an array
    let arr = str.split("");
    // reverse the order of the array
    arr.reverse();
    // join that array back into a string
    // return the result!
    return arr.join("");
}

reverse("hello")
module.exports = reverse;


// DEBUGGER STEPS
//  ADD A DEBUGGER STATEMENT IN YOUR FUNCTION debugger;
// CALL THE FUNCTION MANUALLY (INVOKE)
// AT THE TERMINAL, RUN 'NODE INSPECT INDEX.JS'
// TO CONTINUE EXECUTION OF THE FILE, PRESS 'C' THEN 'ENTER'
// TO LAUNCH A 'REPL' SESSION, TYPE 'REPL' THEN 'ENTER'
// TO EXIT THE 'REPL' SESSION, TYPE 'REPL' THEN 'ENTER'