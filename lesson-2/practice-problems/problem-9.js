/*
Given the following data structure, return a new array with the same structure, 
but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.
*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(el => {
  if (typeof el[0] === 'string') return el.slice().sort();
  if (typeof el[0] === 'number') return el.slice().sort((a, b) => a - b);
})

newArr.forEach(el => console.log(el))