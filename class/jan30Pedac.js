/* eslint-disable max-len */
/*

E
- Letter case doesn't matter
- Input is all alphabetic characters with no spaces
- return 0 when no characters are in the right place

D
Input: array of strings
Output: array of integers
Intermediate:
  - string of the alphabet
  - dictionary: key is the letter, value is the position {'a': 1, 'b': 2}

A
High-level strategies
Victor: 
  - loop through the list to parse each string
  - go through each character of the string
  - compare each character to the alphabet string using indexing
  - convert each character to the same case
  - if characters match, increment our counter

Clare: Create a string of the alphabet. Iterate through each string, using indexing, count how many characters are in the the same place as the alphabet string.

Louie: Create a dictionary of letters and alphabetic position, and use that when iterating thorugh a string to count the number of letters in the correct position.

Zack: Crate a string of the alphabet. Iterate over the array, and use a helper function to determine the number of matching characters, mapping that return value to a returned array.

A:
MAIN: solve
- Loop over the array of strings,
  - at each element, map the result of calling our helper function on the element
- return this transformed array

HELPER: numberOfMatchingChars
- declare a variable alphabet and intiialize it to all chars in the alphabet, lowercase
- declare a count varaible, init to zero

- loop over the input string
  - at each index, check if the character at the same index of the alphabet str
    matches the input string char (case insensitive)
    - if so, increment counter

  return counter
*/

function numberOfMatchingChars(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === alphabet[i]) count++;
  }
  return count;
}

function solve(arr) {
  return arr.map((str) => numberOfMatchingChars(str));
}

// JavaScript test cases
console.log(solve(["abode","ABc","xyzD"])); // [4,3,1]
console.log(solve(["abide","ABc","xyz"]));  // [4,3,0]
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])); // [6,5,7]
console.log(solve(["encode","abc","xyzD","ABmD"])); // [1, 3, 1, 3]

// // Python test cases
// print(solve(["abode","ABc","xyzD"]) == [4,3,1]) # True
// print(solve(["abide","ABc","xyz"]) == [4,3,0]) # True
// print(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]) == [6,5,7]) # True
// print(solve(["encode","abc","xyzD","ABmD"]) == [1, 3, 1, 3]) # True

// // Ruby test cases
// puts solve(["abode","ABc","xyzD"]) == [4,3,1] # true
// puts solve(["abide","ABc","xyz"]) == [4,3,0] # true
// puts solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]) == [6,5,7] # true
// puts solve(["encode","abc","xyzD","ABmD"]) == [1, 3, 1, 3] # true