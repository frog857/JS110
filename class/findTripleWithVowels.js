// Find all triple of words in the sentence that have at least 2 vowels in them.  -- Zack

// Test cases
console.log(findTripleWithVowels("This is a test sentence with some vowels")); // [["sentence", "some", "vowels"]]
console.log(findTripleWithVowels("The quick brown fox jumps over the lazy dog")); // []
console.log(findTripleWithVowels("Beautiful, bright, and sunnier days are lovely")); 
// [
//  [ 'Beautiful,', 'sunnier', 'are' ],
//  [ 'Beautiful,', 'sunnier', 'lovely' ],
//  [ 'Beautiful,', 'are', 'lovely' ],
//  [ 'sunnier', 'are', 'lovely' ]
// ]


/* 
PROBLEM:

Rules:
- find all substrings with two vowels
- Then find the triples of those words
- If there are not 3 words, return empty array
- If there are more than three words, return a 2D array with all possible triples

Input: String
Output: Empty array, or a 2D array containing subarrays of triples

Questions: 
- Is it all permutations? No, it's just in order from first to last
- What about 5 or more words? How many would there be there?

Data structures:
- single array containing all the words with 2 or more vowels
- 2D array containing all possible combinations of three words

Algorithm:
- dec and init an array of twoVowelStrings
- loop through words in string, 
- check if there are at least two vowels in a substring
- if so, add that to the twoVowelStrings array
- if not, do nothing

- Dec/Init a solutionArray
- Check the length of the twoVowelStrings array. If 3 or more
- construct 2D array of all triple of words. // EXTRACT TO HELPER
*/
function findTripleWithVowels(sentence) {
  let twoVowelStrings = [];
  let words = sentence.split(" ");
  words.forEach(word => {
    if (hasTwoVowels(word)) twoVowelStrings.push(word);
  })
  //console.log(twoVowelStrings);

  let solutionArray = constructSolutionArray(twoVowelStrings);
  return solutionArray;
}

function hasTwoVowels(string) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  string.split("").forEach(letter => {
    if (vowels.includes(letter)) count++;
  })
  return (count > 1)
}

function constructSolutionArray(array) {
  if (array.length < 3) {
    return [];
  }

  let solutionArray = [];

  for (let i = 0; i < array.length - 2; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      for (let k = j + 1; k < array.length; k++) {
        solutionArray.push([array[i], array[j], array[k]]);
      }
    }
  }
  // for (let array of solutionArray) {
  //   console.log(array);
  // }
  return solutionArray;
}

/*



HELPER FUNCTION:
Construct a 2D array of all the triple of words:

Problem: 
Input: an array of 4 or more strings
Output: 2D array of different combinations of those elements...

Questions: How to do that...

A B C
A B D
A C D
B C D

A B C D E

ABC, ABD, ABE
ACD, ACE, 
ADE

BCD BDE, BCE

CDE

RECURSIVE SOLUTION...?
- start at last subArr of 3, add to array
- move back one char to subArr of 4, return 

Algorithm: nested for loops


- Check if the length of the inputted array is less than 3
- if so, return an empty array

- initialize a solutionArray to [];

- Check if the length of the inputted array is 3;

- nested for loop:
- outer index: start 0, end at 3rd to last char
  - inner index: start at 1 more than outer, end at 2nd to last
    - inner inner index start at 1 more than inner, end at last
      - push the i, j, and k element to the array...




*/


