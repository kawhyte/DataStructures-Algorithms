// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//Solution 1

// function anagrams(stringA, stringB) {
//     const charMapA = buildCharMap(stringA)
//     const charMapB = buildCharMap(stringB)
//     console.log(charMapA);
//     console.log(charMapB);
    
//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length){
//      return false;
//     }
//     for(let char in charMapA){
    
//     console.log("charMapA - Key: "+ char +" "+ "Value: "+ charMapA[char]);
//     console.log("charMapB - Key: "+ char +" "+ "Value: "+ charMapB[char]);
//         if (charMapA[char] !== charMapB [char]) {
//             return false;
//         }
//     }
//     return true;
//     }
    
//     function buildCharMap (str){
//     const charMap= {};
    
//     for (let char of str.replace(/[^\w]/g,'').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//     //console.log(charMap)
//     }
//     return charMap;
//     }

//Soultion 2
function anagrams(stringA, stringB) {
    const cleanA = cleanString(stringA).split('').sort().join();
    const cleanB = cleanString(stringB).split('').sort().join();
   console.log(cleanA)
   console.log(cleanB)

   if (cleanA !== cleanB) {
    return false;
    } 
    return true;
   }
       
   function cleanString (str){
       return str.replace(/[^\w]/g,'').toLowerCase();
   }



module.exports = anagrams;
