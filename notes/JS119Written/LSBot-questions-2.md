
1.  Consider the following code:<!---->

```javascript

function transformArray(arr) {
  return arr.map((num, idx) => {
    if (idx % 2 === 0) return num * 2;
    else return num + 1;
  });
}

console.log(transformArray([1, 2, 3, 4, 5])); // [2, 3, 6, 5, 10]
```

a) Explain what this function does and how it achieves its result.

b) Refactor this function to use a `for` loop instead of `map`. How does this change affect the function's behavior and return value?

a) At a high level, this function takes an array as an argument, and returns an array where the elements have been transformed. The transformed elements are derived by doubling the elements at even indexes, and incrementing the elements at odd indexes.

On an implementation level, this function uses the `.map` method to transform the elements and return them, as well as an `if/else` statement to implements the logic of selecting even and odd indexed elements.

b) Find below a refactoring of the code using a `for` loop:

```javascript

function transformArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) newArr.push(arr[i] * 2);
    else newArr.push(arr[i] + 1);
  }
  return newArr
}

console.log(transformArray([1, 2, 3, 4, 5])); // [2, 3, 6, 5, 10]
```

This refactoring  declares an arr `newArr` and initializes it to an empty array: `[]`. We then loop over the input array. At each element of the input array, we check if the index is even or odd. For even indexed elements, we double the element and push it to `newArr`. For odd indexed elements, we increment the element and push it to `newArr`.  After performing this, we need to explicitly return the array stored at `newArr` using the `return` keyword.

This refactoring shows us that the `.map` method is essentially a looping mechanism, and that there are many ways to achieve the same functionality. In this case, the original `.map` method is more declarative and elegant.

<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->


2.  Examine the following code:<!---->

```javascript
function findUnique(str) {
  let chars = str.toLowerCase().split('');
  return chars.filter((char, index) => 
    chars.indexOf(char) === chars.lastIndexOf(char)
  ).join('');
}

console.log(findUnique("aAbBcC")); // ""
console.log(findUnique("abcdef")); // "abcdef"
```

a) What does this function do? Explain its logic step-by-step.  

b) Modify the function to return an array of unique characters instead of a string. How would this change the function's implementation?

a) This function takes a string as an argument. It will return a new string of characters, which only occur once in the input string, case insensitive. An important concept of working with collections here is selection, via the `filter` method.

The function first obtains an array (`chars`) of the characters in the string, all transformed to lowercase. The array of characters is obtained by common practice of calling the `split` method on the string, passing in an empty string `''` as the argument. We should also note that we chain `toLowerCase` on this method call as well, resulting in the array of characters all being lower case.

Now that we have the array, we call the `filter` method on this array, passing in a callback function as the argument. The callback function has two parameters, `char` and `index`. Within the callback, we use the methods `indexOf` and `lastIndexOf`, called on the `chars` array with `char` passed in as an argument. These methods will return the index of `char` in the current iteration, as well as the last index at which `char` occurs. If these indices aren't the same, we know that the character doesn't occur only once. 

We can use the strict equality operator to return `true` if the character does occur only once, and `false` otherwise. `filter` will use this truthy or falsy value to determine whether to include the element in the returned array of selected elements.