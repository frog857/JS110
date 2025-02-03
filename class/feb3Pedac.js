//------------------------------------------------------------------------------------------
/* 24. 
P:
Write a function that calculates the sum of all numbers in a nested array. 
The array may contain integers, nested arrays of integers, or a mix of both. (for JS don’t use flatten) 

input: an array containing either numbers, arrays of numbers, or arrays of arrays of numbers...
output: the sum of all those numbers. 

rules: 
- don't use flatten
- must sum all the numbers...
- 

D: runningSum number to track the sum as we go through...
- reduce call?
- closure?

A:
- initialize sum to 0
- loop thru the input array
  - at each item check if is is a number, or an Array
    - if a number, add to sum
    - if an array, 
      sum += call sumOfNested on that array
  
- return sum

*/

//SOLUTION //
function sumOfNestedArray(arr) {
  let sum = 0;
  arr.forEach(el => {
    if (Array.isArray(el)) {
      sum += sumOfNestedArray(el);
    } else {
      sum += el;
    }
  })
  return sum;
}
console.log(sumOfNestedArray([1, [2, 3], [4, [5, 6]]])); // 21
console.log(sumOfNestedArray([10, [20, 30, [40]], 50])); // 150

//------------------------------------------------------------------------------------------
/*
Difference of Two:

P: The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.

Input: array of positive integers
Output: 2D array containing pairs of numbers that  are two diff from one another,


rules:
- output array is in ascending order
- input isn't necessarily in order
- no matches should return empty arr


questions: 
- duplicates? Not in the test cases...


D:
- array to contain subArrays of matches
- sort function to sort in ascending based of 0th index value...
- logic to ascertain if a number is a match ...

A:
dec matchesArr and init to empty arr

nested loop over input array
  - if el1 is 2 less than el2
    - push [el1, el2] to the matchesArr

- sort the matchesArr in ascending order

*/

function differenceOfTwo(arr) {
  let matchesArr = [];

  for (let i = 0; i < arr.length; i++) {
    let el1 = arr[i];
    for (let j = 0; j < arr.length; j++) {
      let el2 = arr[j];
      if (el1 + 2 === el2) matchesArr.push([el1, el2]);
    }
  }
  //console.log(matchesArr)
  return matchesArr.sort((a, b) => a[0] - b[0]);
}


// Test cases

// console.log(differenceOfTwo([1, 2, 3, 4]));
// // [[1, 3], [2, 4]]
// console.log(differenceOfTwo([4, 1, 2, 3]));
// // // [[1, 3], [2, 4]]
// console.log(differenceOfTwo([1, 23, 3, 4, 7]));
// // //  [[1, 3]]
// console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// // // [[1, 3], [3, 5], [4, 6]]
// console.log(differenceOfTwo([2, 4]));
// // // [[2, 4]]
// console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// // // []

/* 27.

P: You are given an array of strings and want to find the sum of their numeric values.
On each string, the numeric value can be found by combining the first digit
and the last digit to form a single two-digit number.
Consider your entire array. What is the sum of all of the numeric values?

Rules:
- sum up all the numbers in the array
- a number is derived in each element from finding the first num in the str + the last
  - and making them a single num. Ex: "1abc2" => 12
- If an element only contains single num, return just that num

Input: arr of strings
Output: num

D:
Intermediate arr of nums derived from input arr

A:
High level:
Map all the derived numbers from the strings in the input array onto a new array. 
Use a HELPER function to derive the numbers
Use the reduce function to sum up those numbers and return that.


HELPER: `deriveInt`
declare `firstNum`
declare `secondNum`

loop over string from beginning to end
  - check if invoking the `Number` static method on the char returns NaN
  - if not, assign `firstNum`

loop over string from end to beginning
  - check if invoking the `Number` static method on the char returns NaN
  - if not, assign `secondNum`

concat the two numbers together
invoke the `Number` static method and return


MAIN: `sumStringValues`
- map the result of invoking deriveInt on all elements in the array
- reduce that newly returned array to a single value, the sum

*/

function deriveInt(str) {
  let firstNum;
  let secondNum;

  for (let i = 0; i < str.length; i++) {
    if (!Number.isNaN(Number(str[i]))) {
      firstNum = str[i];
      break;
    }
  }

  for (let i = str.length - 1; i >= 0; i--) {
    if (!Number.isNaN(Number(str[i]))) {
      secondNum = str[i];
      break;
    }
  }
  return Number(firstNum + secondNum);

}

function sumStringValues(arr) {
  return arr.map(el => deriveInt(el)).reduce((acc, cval) => acc + cval);
}

console.log(deriveInt("1abc2"))


console.log(
  sumStringValues(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"])
); // 142

console.log(
  sumStringValues([
    "ninesixthree8six8",
    "5tnzrrzmcsnfivefeightrjninexrhnnfbcb",
    "dcjcj2",
    "4fhcmhdtfourlzdphfxvlmvm6",
  ])
); // 211

