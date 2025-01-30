// Explain what will return from on line 13 and why?

// Does the function below have any side effects? If so, refactor the function so it doesn't have any side effects.

let students = ["Chris", "Pete", "Nick", "Jordan"];

function passedStudents(list) {
  let passed = list.splice(2, 2);
  return passed;
}

passedStudents(students);
console.log(students); // => ?


// Explan the following methods and logs on each section: 

const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num));
//------------------------------------------------
const isEven = numbers.every(num => num % 2 === 0);
console.log(isEven); 
//------------------------------------------------
const hasOdd = numbers.some(num => num % 2 !== 0); 
console.log(hasOdd); 
//------------------------------------------------
const fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 1, 'blueberry'); 
console.log(fruits); 
//-----------------------------------------------
const slicedFruits = fruits.slice(-2, 2);
console.log(slicedFruits); 
//-----------------------------------------------
const fruits = ['apple', 'blueberry', 'cherry'];
const hasCherry = fruits.includes('cherry');
console.log(hasCherry); 
//-----------------------------------------------
const index = fruits.findIndex(fruit => fruit === 'blueberry'); // higher order function
console.log(index); 
//---------------------------------------------
const indexOfApple = fruits.indexOf('apple');
console.log(indexOfApple); 
//---------------------------------------------
const str = 'Hello, world!';
const hasWorld = str.includes('world');
console.log(hasWorld);
//---------------------------------------------
const position = str.indexOf('world');
console.log(position); 


