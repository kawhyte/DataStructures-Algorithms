// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  let max = 0;
  let maxChar = "";

  for (let i of str) {
    if (!chars[i]) {
      chars[i] = 1;
      //console.log(chars[i]);
    } else {
      chars[i]++;
    }

    for (const key in chars) {
      if (chars[key] > max) {
        max = chars[key];
        maxChar = key;
      }
    }
  }
  console.log(maxChar);
  return maxChar;
}

module.exports = maxChar;
