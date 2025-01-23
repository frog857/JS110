
Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains. If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other. Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

Note that for this problem, the letters 'y' and 'w' should be treated as consonants.


Input: Array of Strings
Output: New Array, sorted by highest number of adjacent consonants.

Rules:
- Explicit:
	- Strings must be sorted by highest number of adjacent consonants
	- Output should be an array
	- If two strings contain same number of adjacent consonants, they should maintain original order
	- adjacent consonants: "sloth": 2, "gritty": 3, "fair life": 1
- Implicit: 
	- Strings can be multiple words
	- consonants are everything but: "aeiou"
	- consonants are: "bcdfghjklmnpqrstvwxyz"
	- sort should be in descending order
	- strings are not empty?
	- strings can be single or multiple words.
	- single consonants vs no consonants has no effect

- Questions:
	- What about non alphabetics characters: "don't": 1?
	- is case important?


Data Structures: 
	- Objects: "string1": numOfAdjacents
	- Array: returned array, sorted
	- Strings: "aeiou" to determine what is and isn't a consonant

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

Helper: numOfAdjConsonants
- Input: a String
- Output: an integer representing the number of adj consonants

Algorithm:
- trim white spaces out of the string
- initialize a maxCount to 0
- initialize an empty substring
- Iterate through the string. 
	- If the char is a consonant, add it to the outer string
	- if char is not a consonant && the substring.length is greater than the maxCount, 
		- reassign the maxCount variable to the length of the substring
		- reset the substring to empty
- return the count
