function countMaxAdjacentConsonants(str) {
  str = str.replace(/\s/g, '');
  let maxCount = 0;
  let tempSubstring = "";
  let vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      tempSubstring += str[i];
    } else {
      maxCount = tempSubstring.length > maxCount ? tempSubstring.length : maxCount;
      tempSubstring = "";
    }
    if (tempSubstring.length !== 0 && tempSubstring.length > maxCount) maxCount = tempSubstring.length; 
  }
  return maxCount === 1 ? 0 : maxCount;
}

//console.log(countMaxAdjacentConsonants('month')); // 0
// console.log(countMaxAdjacentConsonants('dddaa')); // 3
// console.log(countMaxAdjacentConsonants('ccaa'));  // 2
// console.log(countMaxAdjacentConsonants('baa'));   // 0
// console.log(countMaxAdjacentConsonants('aa'));    // 0

/*
Algorithm:
- trim white spaces out of the string
- initialize a maxCount to 0
- initialize an empty substring
- Iterate through the string. 
	- If the char is a consontant, add it to the outer string
	- if char is not a consonant && the substring.length is greater than the maxCount, 
		- reassign the maxCount variable to the length of the substring
		- reset the substring to empty
- return the count
*/

function sortStringsByConsonants(arrOfStrings) {
  let adjCounts = {};
  arrOfStrings.forEach(str => {
    adjCounts[str] = countMaxAdjacentConsonants(str);
  });

  let sortableArr = Object.keys(adjCounts)
    .sort((a, b) => adjCounts[b] - adjCounts[a]);
  return sortableArr
}

/*
Algorithm:
- Create a new array to hold sorted strings
- Create an empty object to hold strings and adjacent consonant values
	- Iterate through array
	- count the adjacent consonants in each string (helper function)
	- store the string, and the number of adj consonants in the object
- Iterate through the object
	- construct the new array in descending order of values of properties
	- if the number is the same
		- check the original array order, and construct the array in that manner
- Return the new array
*/

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']