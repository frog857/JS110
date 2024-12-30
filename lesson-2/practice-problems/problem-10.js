/*
Given the following data structure, return a new array with the same structure, 
but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in descending order.
*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(el => {
  if (typeof el[0] === 'string') return el.slice().sort().reverse();
  if (typeof el[0] === 'number') return el.slice().sort((a, b) => b - a);
})


let newArr2 = arr.map(el => {
  return el.slice().sort((a, b) => {
    if (a > b) return -1;
    if (b > a) return 1;
    return 0;
  })
})

newArr2.forEach(el => console.log(el))