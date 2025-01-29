/*
P: write a function that takes an array of nums.
The function should return an array of two elements, representing the positions
of the pair of adjacent numbers with the highest sum.

Input: arr
Output: arr of two nums

rules:
- adjacent number in this example means numbers that are +-1 of num
- if no adjacent numbers exists, return [-1, -1];

D:
- array of input nums
- num representing max sum
- positionsArr to store positions when found...
- nested loop to look at all possible pairs

A:
- dec a maxSum, init to -Infinity
- dec a positionsArr, init to [-1, -1]
- loop over the nums in the arr: i
  - loop over the nums again to get pairs: j
    - dec el1 and el2
    - check if el1 and el2 are adjacent nums
      - if so, check if sum of els is greater than maxSum
        - reassign maxSum
        - reassign positionsArr
- return positions arr

*/


let areAdjacentNums = (num1, num2) => num1 + 1 === num2 || num1 - 1 === num2;

function findAdjacentNums(arr) {
  let maxSum = -Infinity;
  let positionsArr = [-1, -1];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let [el1, el2] = [arr[i], arr[j]];
      if (areAdjacentNums(el1, el2)) {
        if (el1 + el2 > maxSum) {
          maxSum = el1 + el2;
          positionsArr = [i + 1, j + 1];
        }
      }
    }
  }
  return positionsArr;
}


console.log(findAdjacentNums([3, 1, 0, 9]));// [2, 3]
console.log(findAdjacentNums([7, 1, 0, 9, 8]));// [4, 5]
console.log(findAdjacentNums([2, 6, 3, 5, 9, 5, 7]));// [2, 7]
