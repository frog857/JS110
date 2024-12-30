// create a deep copy of the nested arr

const arr = [
  ['b', 'c', 'a'],
  ['blue', 'black', 'green'],
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArr = JSON.parse(JSON.stringify(arr));

arr[2].b[0] = 1
newArr.forEach(el => console.log(el))
console.log(newArr[2].b)