/*
Create a function that takes two arguments: an array arr and a number num. 
If an element occurs in arr more than num times, remove the extra occurrence(s) and return the result.

P: 
- Input: an array containing a variety of elements, a num representing the max number of els to be allowed...
- Output: a new array that contains a MAXIMUM of num elements that are the same

Rules:
- Not type specific! Booleans, objects, nums, potentiall even strings... Primitive and Objects
  - This will make comparison difficult
- Maintain the order of the array
  - The first occurences are kept in the proper order. Excess occurences are deleted after allowedOccurences are counted..
- How to compare true to true? null to null?


D: 
- an array as input
- a num to represent maxAllowedOccurences
- a newArr to be constructed
- an object to track occurences of specific elements
  - EDIT: an object whose key is the el (in string representation), and value is a 2-element array containing element & copy of num

A:
declare an occurenceObj to an empty obj
declare a solutionArr to empty arr
iterate over the input array
  if an element is not in occurencesObj
    add it to the occurenceObj, initialize the value to num

iterate over the input array again
  - at each element, check if the value associated with the property is > 0
    - if so, push to the solutions arr, decrement the value

return solutionArr

*/

function deleteOccurrences(arr, num) {
  let occurencesObj = {};
  let solutionArr = [];

  arr.forEach(el => {
    if (!occurencesObj[el]) occurencesObj[el] = [el, num];
  })

  arr.forEach(el => {
    if (occurencesObj[el][1] > 0) {
      solutionArr.push(occurencesObj[el][0]);
      occurencesObj[el][1]--;
    }
  })
  
  return solutionArr;
  //console.log(occurencesObj)
}


console.log(deleteOccurrences([1, 1, 1, 1], 2)) // ➞ [1, 1]
console.log(deleteOccurrences([13, true, 13, null], 1)) // ➞ [13, true, null]
console.log(deleteOccurrences([true, true, true], 3)) // [true, true, true]

