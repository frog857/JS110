// QUESTION 1
/*
let arr = [1, 2, 3, 4, 5];
let transformedArr = arr.map(num => {
  if (num % 2 === 0) {
    return num * 2;
  }
});

console.log(transformedArr);
*/

// QUESTION 2
/*
let obj = { a: 1, b: 2, c: 3 };
let arr = Object.entries(obj);

console.log(arr)

arr.forEach(([key, value]) => {
  console.log(key);
  console.log(value * 2);
});
*/

// QUESTION 3

// let str = 'hello';
// let result = [...str].reduce((acc, char) => {
//   return acc + char.repeat(2);
// }, '');

// console.log([...str]);

// console.log(result);

// QUESTION 4
let arr = [1, 2, 3, 4, 5];
let result = arr.filter(num => num > 2)
  .map(num => num * 2)
  .reduce((sum, num) => sum + num, 0);

console.log(result);


let obj1 = { a: 'hi', b: 'hello' };
let obj2 = { b: 'bye', c: 'goodbye' };

let combined = { ...obj1, ...obj2, d: 'adios' };

console.log(combined);


