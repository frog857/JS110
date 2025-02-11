function findUnique(str) {
  let chars = str.toLowerCase().split('');
  return chars.filter((char, index) => 
    chars.indexOf(char) === chars.lastIndexOf(char)
  ).join('');
}

console.log(findUnique("aAbBcC")); // ""
console.log(findUnique("abcdef")); // "abcdef"


function flattenAndSort(array) {
  return array
    .reduce((flat, current) => flat.concat(current), [])
    .sort((a, b) => a - b);
}

console.log(flattenAndSort([[3, 2, 1], 3, [4, 6, [2], 5], [], [9, 7, 8]]));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]