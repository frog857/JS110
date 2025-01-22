// Write a function that calculates the sum of all numbers in a nested array.
// The array may contain integers, nested arrays of integers, or a mix of both.
// (for ruby and JS don’t use flatten) -- Hamdi

/*
P:
Given an array that is not flat. find the total sum of numbers in the array
- array always has elements
- elements may be number, array, or array of arrays
- input only contains numbers

E:


D:
arrays, and 2D arrays
counter varaible to add the sum...

A:
- initialize a counter variable to 0

- loop thru the input array
  - if the element is a number:
    - add it to the sum
  - otherwise:
    - add the result of invoking the function recursively to the sum
- return the sum

*/

function sumOfNestedArray(arr) {
  let sum = 0;
  arr.forEach(el => {
    if (typeof (el) === "number") {
      sum += el;
    } else if (Array.isArray(el)) {
      sum += sumOfNestedArray(el);
    }
  });
  return sum;
}


// Test cases
console.log(sumOfNestedArray([1, [2, 3], [4, [5, 6]]])); // 21
//console.log(sumOfNestedArray([10, [20, 30, [40]], 50])); // 150
