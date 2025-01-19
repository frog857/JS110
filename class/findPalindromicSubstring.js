/* eslint-disable max-len */

// Write a function that finds the longest palindromic substring in a given sentence.
// A palindromic substring reads the same forwards and backwards.
// The function should ignore spaces, punctuation, and case.
// If there are multiple palindromic substrings of the same length, return the first one found. -- Generosa


/*
P:
Input: a string, alphanumeric, with different cases, and spaces
Output: the longest palindromic substring. no spaces, no caps

Rules:
- Spaces don't matter in palindromes
- if two substrings are the same length, the first one is returned

Questions:
- How to find if a substring is a palindrome? (helper function)

E:


D:


A:
- initialize an empty array to contain palindromes
- trim the sentence to eliminate whitespace and case difference.

- check the sentence for palindromes (use an outer loop and an inner loop)
  - when palindrome is found, add it to the palindrome array

- return the longest palindrome in the palindrome array
  - if there are two max palindromes, return the first


*/

function longestPalindromicSubstring(str) {
  let palindromeArr = [];
  let trimmedStr = str.toLowerCase().replace(/\s+/g, '');
  console.log(trimmedStr);
  for (let i = 0; i < trimmedStr.length; i++) {
    for (let j = i; j < trimmedStr.length + 1; j++) {
      let substr = trimmedStr.slice(i, j);
      console.log(substr);
      if (isPalindrome(substr)) {
        palindromeArr.push(substr);
      }
    }
  }

  return palindromeArr.sort((a, b) => b.length - a.length).shift();
}


// Test cases
console.log(longestPalindromicSubstring("Madam Arora teaches malayalam")); // "malayalam"
console.log(longestPalindromicSubstring("Nurses Run")); // "nursesrun"
console.log(longestPalindromicSubstring("ABC")); // "a"


function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) return true;
  if (str[str.length - 1] !== str[0]) {
    return false;
  } else {
    return isPalindrome(str.slice(1, str.length - 1));
  }
}

console.log(isPalindrome("toot")); // true
console.log(isPalindrome("torent")); // false
console.log(isPalindrome("madam")); // true





/*
P:
Write a function that determines if a string is a palindrome

Input: string
Output: boolean

- a string is not a palindrome if the first and last characters are not the same
- can assume no white space and lower case letters

E:


D:


A:
- if the string is length 1 or length 0: return true

- check if the first and last characters are the same
  - if not: return false
  - if so:
    - trim off the first and last characters, and check the next substring


*/