// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    const chunkedArray = [];

    for(let element of array){
    const lastElement = chunkedArray[chunkedArray.length - 1];
    console.log("Last Element: "+lastElement);
    
    if (!lastElement || lastElement.length === size) {
        chunkedArray.push([element])
    }
    else{
        lastElement.push(element);
    }
    }
    return chunkedArray;



}

module.exports = chunk;
