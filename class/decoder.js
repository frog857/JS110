/* eslint-disable id-length */
/* eslint-disable max-len */

// Create a function called decoder that decodes a secret message from a sentence.
// The secret message is formed by retrieving every n**-th character** from every n**-th word** of the sentence.

// •  If the word has fewer than n characters, skip that word.
// •  If there are fewer than n words in the sentence, return an empty string.
// •  Words in the sentence are separated by spaces. -- Nick


/*
P:
- on every nth word, we will attempt to get some chars
- we will obtain those chars by targeting every nth char
  - if there is no char at n, we add nothing
- if there aren't n words, or in n words, there are no n chars, we will return an empty str

input: str representing a "sentence", delimited by " " spaces.
input: a number representing n, as described in the problem.

output: a string of characters that form a secret code.

E:


D:
- an array of strings that will serve as the sentence words
- a result string, that will have selected chars concatenated to it


A:
- initialize a result string to an empty string
- split the input string into an array of individual words
- iterate over every nth word
  - on that word, iterate over every nth char
    - at each nth char, add that char to the result string
- return the result string

*/

function decoder(str, num) {
  let result = "";
  let wordsArr = str.split(" ");
  for (let i = num - 1; i < wordsArr.length; i += num) {
    let word = wordsArr[i];
    for (let j = num - 1; j < word.length; j += num) {
      result += word[j];
    }
  }
  return result;
}

// Test cases
console.log(decoder("She sells sea shells on the sea shore", 2));  // Output: "elhlshhr"
console.log(decoder("The quick brown fox jumps over the lazy dog", 3));  // Output: "oeg"
console.log(decoder("I love programming in JavaScript", 3));  // Output: "oai"
console.log(decoder("Just a simple test sentence to decode", 4));  // Output: "t"
console.log(decoder("This will not work well", 5));  // Output: ""
console.log(decoder("Send every code to find secrets hidden", 2));  // Output: "vroert"

