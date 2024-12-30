// create deep copy

const truthiness = {
  falsy: [ null, undefined, '', false, NaN, 0 ],
  truthy: ['everything else...']
};


const deepCopy = {};

for (let prop in truthiness) {
  deepCopy[prop] = [...truthiness[prop]];
}

let newObj = {};

Object.entries(truthiness).forEach(([key, value]) => {
  newObj[key] = value.slice();
})

truthiness['foo'] = ['meow'];
truthiness.falsy.push("fiddles")

Object.entries(newObj).forEach(([key, value]) => console.log(key, value))
// Object.keys(newObj).forEach(el => console.log(el))
// Object.values(newObj).forEach(el => console.log(el))


//Object.entries(deepCopy).forEach(([key, value]) => console.log(key, value))


