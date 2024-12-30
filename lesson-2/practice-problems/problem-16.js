/*
Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. 
The sizes should be uppercase, and the colors should be capitalized.

*/

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let newArr = [];

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

for (let item in obj) {
  if (obj[item].type === 'fruit') newArr.push(obj[item].colors.map(word => capitalize(word)));
  if (obj[item].type === 'vegetable') newArr.push(obj[item].size.toUpperCase())
}

console.log(...newArr)