// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const splitted = str.split(' ');
    let newArr =[];

   for (const word of splitted) {
    const firstLetter = word[0].toUpperCase();
    const sliced = word.slice(1);
    newArr.push(firstLetter+sliced);
   }
   
   console.log(newArr.join(' '));
   return newArr.join(' ')

}

module.exports = capitalize;
