// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// SOLUTION 1 
// function palindrome(str) {
//     let arr = str.split('').reverse().join('');
    
//     if (arr === str) {
//         return true;
//     } 
//     return false;
// }

// SOLUTION 2 
// function palindrome(str) {
//     let rev  = '';
//     for (i of str){
//         rev = i + rev
//     }
//     console.log(rev)
//     if (rev === str) {
//         return true;
//     } 
//     return false;
// }

// SOLUTION 3 
function palindrome(str) {

    let arr = str.split('');
    let ans = arr.reduce((acc, char)=>{
       return char + acc
    }, '')
    if (ans === str) {
        return true;
    } 
    return false;
}


module.exports = palindrome;
