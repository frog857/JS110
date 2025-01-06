
/*
Problem: // Your objective is to return all pairs of numbers from a given array of numbers
// that have a difference of 2.
// The result array should be sorted in ascending order of values.
// Assume there are no duplicate numbers in the array.

/*

Input/output:
- an array of numbers

Output:
- an array of arrays containing pairs of numbers

Rules:
- the pairs should be numbers from the input array whose difference is 2
- we should include all possible pairs of numbers
- if there are no pairs, return an empty array
- the pairs must be ordered in ascending order
- there are no duplicates

Questions:
-

Data Structure:
- input array
- 2D solution array


Algorithm:
get the input array
set a solutions array to an empty array
iterate through the input array 
  do another nested iteration
  check if the outer iterated element is GREATER by 2 than the inner iterated element
  if so, push that pair as an array to the solutions array
return the solutions array

*/

function differenceOfTwo(array) {
  let solutionsArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] - array[j] === 2) {
        solutionsArray.push([array[j], array[i]]);
      }
    }
  }
  solutionsArray.sort((a, b) => {
    a[0] - b[0];
  })
  return solutionsArray;
}

console.log(differenceOfTwo([1, 2, 3, 4]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7]));
//  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4]));
// [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// []