
```javascript
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
```

The code above will output an array containing three elements `[undefined, undefined, undefined]`. There is a decent amount happening here, but understanding why this is the output hinges on understanding the `map` method.

When `incrementAge()` is invoked with `pets` passed in as an argument, we enter the function body. Within this code, we are invoking `map` on the evaluated expression `Object.values(animals)`. This expression gives us an array of the inner objects, containing two properties, `animal` and `age`. `map` will iterate over these objects, and return a new array containing the return value of the invoked callback on each element. This results in an array of the same length as the calling array (in this case, 3). 

However, since an explicit `return` keyword is missing, the implicit return value of a function, `undefined`, will be used to create the transformed element, and not any particular value from the callback. Thus, we end up with an array: `[undefined, undefined, undefined]`.


```javascript
// what will the following code log to the console. Why?

let exp = num1 => num2 => num1 ** num2;

let multiply = (num1, num2) => num1 * num2;

console.log(multiply(exp(2)(2), 3));

```

The following code will output 12 to the console. There are several concepts at play here: higher order functions, functions as first class objects, and function composition.

`multiply` is a fairly straightforward function that has two parameters, and returns the result of multiplying those together. Thus, on the last line, we can tell that `multiply(exp(2)(2), 3)` will return the first argument multiplied by the second argument. 

However, the code `exp(2)(2)` doesn't look like a number at first glance. This expression ultimately will evaluate to `4`, but there are a few steps first.

The function `exp` has one parameter: `num1`. This function *returns a function* which also has one parameter: `num2`. This inner (anonymous) function will return the result of taking the value assigned to `num1` to the power of `num2`. 

Note that the value of `num2` is found as a function-scoped variable (parameter) in the anonymous function, but `num1` is not. `num1` is instead found when javascript looks to the outer scope (In this case, the scope of the function `exp`), where it will find the function-scoped variable `num1`, and its associated value.

All of this results in the first argument passed to `multiply`, `exp(2)(2)` being evaluated to 4 (2 to the power of 2). 4 multiplied by 3 will then result in 12.