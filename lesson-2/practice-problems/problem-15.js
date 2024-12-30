// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  let sumOddsA = a.reduce((acc, cVal) => {
    if (cVal % 2 !== 0) acc += cVal;
    return acc;
  }, 0)
  //a.forEach(num => {if (num % 2 !== 0) sumOddsA += num});
  let sumOddsB = b.reduce((acc, cVal) => {
    if (cVal % 2 !== 0) acc += cVal;
    return acc
  }, 0)
  //b.forEach(num => {if (num % 2 !== 0) sumOddsB += num});

  console.log({sumOddsA, sumOddsB})

  return sumOddsA - sumOddsB;
})

console.log(...arr)