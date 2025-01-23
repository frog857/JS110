// 1. what does the following code output and why?

const pets = {
  larry: {animal: 'dog', age: 1},
  george: {animal: 'cat', age: 4},
  carrie: {animal: 'otter', age: 7}
};

function incrementAge(animals) {
  return Object.values(animals).map(animal => {
    animal.age += 1;
  });
}

console.log(incrementAge(pets));

// 2. Using the pets object, write some code that returns an array of all pets
// whose ages are greater than 2.

