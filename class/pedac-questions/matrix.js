// Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.

/*
declare subarray as empty arr
loop y times, pushing z to subarray
declare mainArray;
loop x times, pushing subarray to mainArray
*/

function matrix(x, y, z) {
  let subArray = [];
  for (let i = 0; i < y; i++) {
    subArray.push(z);
  }
  let mainArray = [];
  for (let i = 0; i < x; i++) {
    mainArray.push(subArray);
  }
  return mainArray;
}