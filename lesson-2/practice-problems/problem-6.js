

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// Given this previously seen family object, print the name, age, and gender of each family member:
// (Name) is a (age)-year-old (male or female).

// for (let member in munsters) {
//   console.log(`${member[0].toUpperCase() + member.slice(1)} is a ${munsters[member].age}-year-old ${munsters[member].gender}.`);
// }

let entriesArr = Object.entries(munsters);


entriesArr.forEach(el => console.log(el[0], el[1]))