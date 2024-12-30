function arrayToObject(arr) {
  // Input: arr
  // Output: an obj where keys are arr elements, and values are corresponding arr indexes
  return arr.reduce((acc, cVal, idx) => {
    acc[cVal] = idx;
    return acc;
  }, {})
}

function arrayToObject2(arr) {
  // create an empty object
  // loop thru the array
    // create a property on the object with the element plus index
  let returnObj = {};
  for (let i = 0; i < arr.length; i++) {
    returnObj[arr[i]] = i;
  }
  return returnObj
}

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
//console.log(arrayToObject2(flintstones));

// ------------------------------------------------------------

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sumAges = Object.values(ages).reduce((acc, val) => acc + val);
//console.log(sumAges)

// ------------------------------------------------------------

let ages2 = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

function findMin(arr) {
  let min = Infinity;
  arr.forEach(num => {
    if (num < min) min = num;
  })
  return min;
}

let lowestAge = findMin(Object.values(ages2))
// console.log(lowestAge)
// console.log(Math.min(...Object.values(ages2)))

// ------------------------------------------------------------

let statement = "The Flintstones Rock";
let obj = {};
statement.replace(" ", "").split("")
  .forEach(letter => {
    if (obj[letter] === undefined) {
      obj[letter] = 1;
    } else {
      obj[letter] += 1;
    }
  })

console.log(obj) // { T: 1, h: 1, e: 2, F: 1, l: 1, ... }