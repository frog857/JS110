/*
Create a function that takes an array of numbers or strings and returns an array with the items
from the original array stored into subarrays. 
Items of the same value should be in the same subarray.

P:
input: an array of nums or string (or both?)
output: an array of subarrays. subarrays contain identical elements from OG array

rules: 
- number of elements in subarray determined by number of that element in OG array
- order of subarrays determined by order of first appearance in OG array
- 

D:
- array (input) of all elements
- intermediate array to store subarrays
- a number of subarrays to store the appropriate number of identical elements

A:
- declare a solutionArr to empty arr
- copy the input array to a copyInput variable

- loop over the array
- pop off first element of the array, add it to a subarray
  - check the rest of the array for that element, concat that result to the subarray
  - push the subarray to the solution array

- return the solution arr
*/

function advancedSort(arr) {
  let solutionArr = [];
  let copyArr = arr.slice();

  while (copyArr.length) {
    let currentEl = copyArr.shift()
    let subArr = [currentEl];

    subArr.push(...copyArr.filter(el => el === currentEl));
    copyArr = copyArr.filter(el => el !== currentEl)
    solutionArr.push(subArr);
  }
  return solutionArr;
}

console.log(advancedSort([2, 1, 2, 1]))// ➞ [[2, 2], [1, 1]]
console.log(advancedSort([5, 4, 5, 5, 4, 3]))// ➞ [[5, 5, 5], [4, 4], [3]]
console.log(advancedSort(["b", "a", "b", "a", "c"]))// ➞ [["b", "b"], ["a", "a"], ["c"]]