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

// console.log(advancedSort([2, 1, 2, 1]))// ➞ [[2, 2], [1, 1]]
// console.log(advancedSort([5, 4, 5, 5, 4, 3]))// ➞ [[5, 5, 5], [4, 4], [3]]
// console.log(advancedSort(["b", "a", "b", "a", "c"]))// ➞ [["b", "b"], ["a", "a"], ["c"]]


function _advancedSort(arr) {
  return Object.values(arr.reduce((acc, el) => {
    console.log(acc[el]);
    acc[el] = acc[el] || [];
    console.log(acc[el], acc);
    acc[el].push(el);
    console.log(acc);
    return acc;
  }, {}));
}

//console.log(_advancedSort([2, 1, 2, 1])); // ➞ [[2, 2], [1, 1]]
//console.log(_advancedSort([5, 4, 5, 5, 4, 3])); // ➞ [[5, 5, 5], [4, 4], [3]]
//console.log(_advancedSort(["b", "a", "b", "a", "c"])); // ➞ [["b", "b"], ["a", "a"], ["c"]]


function __advancedSort(arr) {
  const map = new Map();
  console.log(map)

  for (const el of arr) {
    // If the key doesn't exist, create an entry with the current element as the key
    if (!map.has(el)) {
      map.set(el, []);
    }
    // Push the current element into the array associated with its key
    map.get(el).push(el);
  }
  console.log(map)
  // Convert the values of the Map to an array
  return Array.from(map.values());
}


console.log(__advancedSort([2, 1, 2, 1])); // ➞ [[2, 2], [1, 1]]


