// Implement a function that finds substrings in a word that are pseudo-consonant blends. A pseudo-consonant blend is two or three consonants that are right next to each other.

// Test cases
console.log(findPseudoConsonantBlends("psychology")); // ["psy", "ch", "gy"]
console.log(findPseudoConsonantBlends("strengths")); // ["str", "ngt", "hs"]
console.log(findPseudoConsonantBlends("rhythms")); // ["rhy", "thm"]
console.log(findPseudoConsonantBlends("happy")); // ["ppy"]
console.log(findPseudoConsonantBlends("example")); // ["mpl"]

/*
P: Write a function that takes a string
- the function should return an array of pseudo-consonant blends

IN/OUT: String, array of strings

Rules: What is a pseudo-consonant blend?
- a cluster of consonants of at least two characters
- y is included "aeiou" are vowels
- if a consonant cluster is 3 consonants, we only include that cluster, and not the 1st two, 
- and lat two character
- cluster is max 3 characters

D:
- variable containing all possible vowels "aeiou"
- array: to add found clusters to

A:
- dec an array `clustersArr` to an empty arr
- dec a varaible `vowels` to "aeiou"
- while the string has length 
  - check if the first three characters are consonant  
    - if so, add them to the cluster, and slice those off the string
  - if there are two consonants
    - add to the cluster, slcie off the string
  - slice the character
- return the clusters arr




- loop over the string
  - check if the character followed by the next character and the chracter after that are consonants  
    - if so, add that slice of string to our results array
  - check if the character followed by the next character are both consonants   
    - if so, add that length two cluster to our results array
- return our `clustersArr`


-

["psy", "sy" "ch", "gy"]

*/


function findPseudoConsonantBlends(str) {
  let clustersArr = [];
  let consonants = "bcdfghjklmnpqrstvwxyz";
  let currentStr = str;

  while (currentStr.length) {
    if (consonants.includes(currentStr[0]) && consonants.includes(currentStr[1]) && consonants.includes(currentStr[2])) {
      clustersArr.push(currentStr[0] + currentStr[1] + currentStr[2]);
      currentStr = currentStr.slice(3);
    } else if (consonants.includes(currentStr[0]) && consonants.includes(currentStr[1])) {
      clustersArr.push(currentStr[0] + currentStr[1]);
      currentStr = currentStr.slice(2);
    } else {
      currentStr = currentStr.slice(1);
    }
  }

  return clustersArr;
}

function findPseudoConsonantBlends(word) {
  const consonantBlendPattern = /[^aeiou]{2,3}/gi;
  let matches = word.match(consonantBlendPattern);
  return matches || [];
}

