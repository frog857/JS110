/*

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should be 6: [4, -1, 2, 1]
If the array is made up of only negative numbers, return 0 instead.

P:
- input: array of numbers
- output: single number, representing the maximum possible sum of a sequence of numbers in input arr

rules:
- if the arr is empty, return 0
- if the arr contains only negatives, return 0

- the max sequence can come from any length of sequences...
  - i.e. 3 numbers in a row. 1 number. 6 numbers...

E:


D:
- array input of numbers
- subarrays representing all possible sequences
- sum helper function
- maxSum number to check against...


A:
- declare a maxSum number, and set it to 0
- create all possible sequences using a nested loop
  - check each sequences's sum against the maxSum. (HELPER)
    - if sequence sum is higher, reassign maxSum variable to sequenceSum

- return the maxSum number

*/

function maxSequence(arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length + 1; j++) {
      let currentSequence = arr.slice(i, j);
      // console.log(currentSequence)
      let sumOfCurrentSequence = sum(currentSequence);
      if (sumOfCurrentSequence > maxSum) maxSum = sumOfCurrentSequence;
    }
  }
  return maxSum;
}

function sum(arr) {
  return arr.reduce((a, b) => a + b);
}

//console.log(sum([1, 2, -3, -3]));


// // Test Cases
console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true
