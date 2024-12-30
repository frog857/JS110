//How would you order the following array of number strings by descending numeric value (largest number value to smallest)?


let arr = ['10', '11', '9', '7', '8'];

let newArr = arr.map(el => {
  return parseInt(el)
}).sort((a, b) => b - a);

console.log(newArr)

console.log(arr.sort((a, b) => Number(b) - Number(a)));