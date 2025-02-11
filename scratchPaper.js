console.log("Hello\n");

// let words = ["Fate", "fell", "short", "this", "time"];

// function logLetters(array) {
//   for (let i = 0; i < array.length; i++) {
//     let word = array[i];
//     for (let j = 0; j < word.length; j++) {
//       console.log(word[j]);
//     }

//   }
// }

// logLetters(words);

// function copyUser(account) {
//   let clone = {};


//   for (let property in account) {
//     let value;

//     if (Array.isArray(account[property])) {
//       value = account[property].slice();
//     } else value = account[property];

//     clone[property] = value;
//   }

//   return clone;
// }

// const user = {
//   name: "Joey",
//   position: "Teaching Assistant",
//   courses: ["JS101", "JS109", "JS120", "JS129"],
// };

// const newUser = copyUser(user);
// newUser.name = "Antonina";
// newUser.courses.push("JS130");

// console.log(newUser.courses); // Should log [ 'JS101', 'JS109', 'JS120', 'JS129', 'JS130' ]
// console.log(user.courses); // Should log [ 'JS101', 'JS109', 'JS120', 'JS129']


// const NORSE_GODS = {
//   Odin: ["wisdom", "ravens", "death"],
//   Freyja: ["chariot", "cars", "love"],
//   Frigg: ["marriage", "prophecy", "clairvoyance"],
// };

// let goddess = "Frigg";

// console.log(NORSE_GODS[goddess]); // Expected output: ['marriage', 'prophecy', 'clairvoyance']


// let fruitVarieties = ['Apple', 'Strawberries', 'Watermelon'];
// let computerBrands = ['MacIntosh'];

// fruitVarieties['Apple'] = ['Granny Smith', 'Gala', 'MacIntosh'];

// //console.log(fruitVarieties['Apple'])

// console.log(fruitVarieties['Apple'][2] === computerBrands[0]);


//function hide(arr, value) {
//   return arr.map(el => {
//     return (value === el) ? "*" : el;
//   });
// }

// let oldData = ["launch", "code", "secret", "secret", "over"];
// let newData = hide(oldData, "secret");
// console.log(newData); // ['launch','code','*','*','over' ]
// console.log(oldData === newData); // false

// let oldData2 = ["shhh", "its", "a", "secret"];
// let newData2 = hide(oldData2, "shhh");
// console.log(newData2); // ['*','its','a','secret' ]
// console.log(oldData2 === newData2); // false

// function valueOrNoValue(obj, property) {
//   if (obj.hasOwnProperty(property)) {
//     return obj[property];
//   } else {
//     return "no value";
//   }
//   //return obj[property] || "no value";
// }

// let quantity = { apple: 25, orange: 0, banana: 13 };

// console.log(valueOrNoValue(quantity, "apple"));
// console.log(valueOrNoValue(quantity, "orange"));
// console.log(valueOrNoValue(quantity, "pineapple"));


// function foo(arg) {
//   return (arg) => arg;
// }

// const printMessage = (message) => console.log(message);

// printMessage(foo()("nonsense"));