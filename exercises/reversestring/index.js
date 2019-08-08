// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//SOLUTION 1
// function reverse(str) {
// return arr = str.split('').reverse().join('');
// //arr.reverse();
// //return arr.join('');
// }

//SOLUTION 2
// function reverse(str) {
//     let reversedString = '';
//     for (const iterator of str) {
//        reversedString = iterator + reversedString;
//        console.log(reversedString)
//     }
//     return reversedString
// }

//SOLUTION 3
function reverse(str) {
    console.log(str);
    let arr = str.split('');
    let  ans =arr.reduce((reverse, char )=> {
    return char + reverse;
    },'')
console.log(ans);
return ans;

}

module.exports = reverse;
