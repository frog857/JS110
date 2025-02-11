/*
P:
Unique String Characters
Given two strings, return the characters that are not common in the two strings.

In/Out: two strings. One string

Rules:
- string must contain only characters that are in one string, but not the other
- output string must be in the order left-to-right from str1 -> str2
- if duplicate characters in one string, it doesn't go into the result string
  - Question: what about duplicates in one string? all go in? just one?
- if no common chars, result is empty str

Data structure:
- string to construct and return

Algo, High level:
- Loop over the first string and check each character to see if it exists in str2. 
- If it does, don't add it. 
- If it doesn't, add it. Delete any duplicates in that string so it doesn't get added twice
- Do the same for str2 on string 2
- return the constructed string

- init `resultStr`
- loop over str1, check each character to see if it occurs in the other string
  - if not
    - append to `resultStr`
    - delete any duplicates in str1...?
  - if so, do nothing
- loop also on str 2, performing same algo...
- return `resultStr`

*/

function uniqueStringCharacters(str1, str2) {
  let resultStr = "";
  str1.split("").forEach(char => {
    if (str2.indexOf(char) === -1 && resultStr.indexOf(char) === -1) resultStr += char;
  })
  str2.split("").forEach(char => {
    if (str1.indexOf(char) === -1 && resultStr.indexOf(char) === -1) resultStr += char;
  })
  return resultStr;
}



// JavaScript test cases
console.log(uniqueStringCharacters("xyab","xzca") === "ybzc"); // true
console.log(uniqueStringCharacters("a","z") === "az"); // true
console.log(uniqueStringCharacters("abcd","de") === "abce"); // true
console.log(uniqueStringCharacters("abc","abba") === "c"); // true
console.log(uniqueStringCharacters("xyz","zxy") === ""); // true
