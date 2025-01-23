/* eslint-disable id-length */
/* eslint-disable max-len */

/*
Unique String Characters
Given two strings, return the characters that are not common in the two strings.

*/

/*
P:
- Input: two strings
- Output: a single string: containing all chars that are present in one string, but not both

Rules:
- don't need to worry about case, or whitespace
- order is important. order is left-to-right in str 1 then l-to-r in str 2
- if there are duplicates in one string, they count as one char
- if no all chars are common, empty str

E:


D:

arrays of unique chars from a string:
[a, b, c] & [a, b] => [c]

array of chars that are only present in one array or another
[a, b, c] & [a, b] => [c]

A:
- init uniqueChars array for str 1
- init uniqueChars array for str 2

- loop over str 1, if a char does not exist in the uniqueChar array, add it in
- loop over str 2, if a char does not exist in the uniqueChar array, add it in

initialize result string

- loop over uniqueCharArr1
  - if uniqueCharArr2 doesn't contain that char
    - add it to result str

- do the same for uniqueCharArr2

return result str

*/

function uniqueStringCharacters(str1, str2) {
  let uniqueCharArr1 = [];
  let uniqueCharArr2 = [];

  for (let i = 0; i < str1.length; i++) {
    if (!uniqueCharArr1.includes(str1[i])) uniqueCharArr1.push(str1[i]);
  }
  for (let i = 0; i < str2.length; i++) {
    if (!uniqueCharArr2.includes(str2[i])) uniqueCharArr2.push(str2[i]);
  }

  let result = "";

  uniqueCharArr1.forEach(char => {
    if (!uniqueCharArr2.includes(char)) result += char;
  });
  uniqueCharArr2.forEach(char => {
    if (!uniqueCharArr1.includes(char)) result += char;
  });
  return result;
}

// JavaScript test cases
console.log(uniqueStringCharacters("xyab","xzca") === "ybzc"); // true
console.log(uniqueStringCharacters("a","z") === "az"); // true
console.log(uniqueStringCharacters("abcd","de") === "abce"); // true
console.log(uniqueStringCharacters("abc","abba") === "c"); // true
console.log(uniqueStringCharacters("xyz","zxy") === ""); // true
