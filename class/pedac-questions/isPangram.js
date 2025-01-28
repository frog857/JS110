/*
Create a function that takes a string as an argument and returns true if the string is a pangram, falseif it is not.
Pangrams are sentences that contain every letter of the alphabet at least once. For example, the sentence "Five quacking zephyrs jolt my wax bed." is a pangram since it uses every letter at least once. Note that case is irrelevant.
Examples


Copy Code
const p = console.log;
p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
p(isPangram(myStr) === true);

The above tests should each print true.

*/


/*
P:
Input: a string representing a sentence
Output: true or false

Rules: 
- only return true if the sentence is a pangram
  - a pangram contains every letter of the alphabet AT LEAST once
  - Pangrams must be at least 26 characters



E:


D:
a String as the input sentence
a string representing the entire alphabet, to check each character of the string against

A:
- declare a variable "abcdefghijklmnopqrstuvwxyz" that will represent all characters in the alpbahet
- loop over the entire input string
  - at each char, check if that char (case insensitive) is included in the alphabet string
    - if so,
      - get the char code at
    - if not, do nothing
- check if the alphabet string is empty ? true : false
*/

function isPangram(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let idx = 0; idx < str.length; idx++) {
    let char = str[idx];
    if (alphabet.includes(char.toLowerCase())) {
      let index = alphabet.indexOf(char.toLowerCase());
      alphabet.splice(index, 1);
    }
  }

  return !alphabet.length;
}

const p = console.log;
p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);