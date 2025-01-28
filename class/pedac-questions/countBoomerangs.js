/*
P: Create a function that returns the total number of boomerangs in an array

Input: array
Output: integer representing number of boomerangs in an arr

Rules:
- a boomerang is a sequence of numbers, length of 3, where the first and last numbers are the same, and the middle number is different
- an array of [1, 4, 1, 5] contains one boomerang
- boomerangs can overlap: [1, 7, 1, 7] contains two boomerangs
- negative numbers don't matter (boomerangs can be upside down or downside up)


E:


D:
an input array
an output number (count)
an intermediary array (subarrays), to represent each slice of 3 to check
a helper function to determine isBoomerang

A:
- set count to 0
- loop over the array and examine each slice of 3
  - if the slice is a boomerang, increment the count
- return the count

*/

function countBoomerangs(arr) {
  let count = 0;
  arr.forEach((_el, idx) => {
    //console.log(el, idx);
    let slice = arr.slice(idx, idx + 3);
    //console.log(slice);
    if (slice[0] === slice[2] && slice[0] !== slice[1]) count++;
  })

  return count;
}

let p = (func) => console.log(func);

p(countBoomerangs([9, 5, 9, 5, 1, 1, 1]))// ➞ 2
p(countBoomerangs([5, 6, 6, 7, 6, 3, 9]))// ➞ 1
p(countBoomerangs([4, 4, 4, 9, 9, 9, 9]))// ➞ 0