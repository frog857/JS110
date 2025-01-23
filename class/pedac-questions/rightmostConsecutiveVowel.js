/* eslint-disable max-len */


/*
P:
Given a sentence, write a function that finds the starting index of the rightmost occurrence of any
consecutive vowel sequence in the sentence. The function should be case-insensitive and should only consider
vowel sequences within individual words (not spanning multiple words). -- Nick

If no consecutive vowels are found, return nil (for Ruby) or null (for JavaScript).

Input: a string with the structure of a sentence
Output: either a number representing the right most occurence of a consecutive vowel sequence, or null


Questions:
Should the index be the rightmost vowel in the rightmost sequence, or leftmost?
- leftmost of the last two adjacent vowels

Rules:
- index should be the leftmost of the last two adjacent vowels
- consecutieve vowels between words don't count (keep spaces)
- case doesn't matter

E:


D:
- string of a sentence (cleaned for case)
- looping mechanism (starting from the end of the string, to make it simpler)

A:
- format the string (get rid of capital letters)
- loop from the last character backward.
  - Compare the character at idx to the character that precedes it
  - when a match of vowels is found, return the index of the preceding character

*/

function rightmostConsecutiveVowel(sentence) {
  let cleanSentence = sentence.toLowerCase();
  let vowels = "aeiou";

  for (let idx = cleanSentence.length - 1; idx >= 0; idx--) {
    let word = cleanSentence[idx];
    let precedingWord = cleanSentence[idx - 1];
    if (vowels.includes(word) && vowels.includes([precedingWord])) {
      return (idx - 1);
    }
  }

  return null;
}


console.log(rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")); // Output: 37
console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: 29
console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: 15
console.log(rightmostConsecutiveVowel("This sentence has no consecutive vowels")); // Output: null
console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: 23