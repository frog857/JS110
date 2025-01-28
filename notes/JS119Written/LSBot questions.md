
1. What will this code output?
```javascript
let arr = [1, 2, 3, 4, 5];  
let transformedArr = arr.map(num => {  
  if (num % 2 === 0) {  
    return num * 2;  
  }  
});  
  
console.log(transformedArr);
```

This code will output the value of `transformedArr`: `[ undefined, 4, undefined, 8, undefined ]`. 

In this code, we declare a variable transformed array, which will be initialized to the result of calling the `map` method on the array `arr`. `map` is a method, which will return a new array of the same length that the method is called upon. In this instance, the array `arr`, with length 5.

The elements in the returned array will be the result of the return value of each invocation of the callback function passed to `map`. In this case, we can see there is a simply logic, where we return `num * 2` for even numbers, and do nothing otherwise.

A key thing we need to understand here is that when map is not given an explicit or implicit return value, it will default to returning `undefined`. Thus, for the elements of the calling array that are even, we will see a new transformed value in our new array. However, for elements that are odd, we will instead return undefined, which is added to the corresponding indices in the returned array.


#2 What will this code output?

```javascript
let obj = { a: 1, b: 2, c: 3 };  
let arr = Object.entries(obj);  
  
arr.forEach(([key, value]) => {  
  console.log(key);  
  console.log(value * 2);  
});
```

This code will output 6 lines:

a
2
b
4
c
6

We first declare an object `obj` and initialize it to: `{ a: 1, b: 2, c: 3 }`. We then declare `arr` and initialize it to the result of invoking the static method `Object.entries`, passing in our `obj` as an argument. This will return a 2D array of key value pairs: `[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]`

We invoke `forEach` on this 2D array. Within the callback passed to `forEach`, we use array destructuring to assign the function-scoped variables `key` to the value of the element at the 0th index of each subarray, and `value` to the value of the element at the 1st index of the subarray.

Within the callback, we console log first the value of `key`, and secondly the value of `value * 2` .  This logs 2 values to the console per iteration. The `forEach` method will iterate 3 times, thus resulting in the 6 logs we see in the console.


#3

```javascript
let str = 'hello';  
let result = [...str].reduce((acc, char) => {  
  return acc + char.repeat(2);  
}, '');  
  
console.log(result);
```

This code will log `hheelloo` to the console. 

We initially start with a variable `str`, which contains the value `"hello"`. We then declare a variable `result`, which will be initialized to the return value of invoking `reduce` on `[...str]`. 

This may look odd at first, but when we remember that the spread syntax `...` paired with an an array literal `[]` can be used to construct an array from a string, we can see that we are actually calling `reduce` on an array of characters of `str`. In this case: `[ 'h', 'e', 'l', 'l', 'o' ]`

We then use `reduce` to generate a single value from this array. Reduce works as follows:
- Reduce takes a callback function, and an initial value (`""` in this case)
- Reduce iterates over all elements in the string, using an accumulator and a current value (`acc`, and `char` in this case) to construct the single value.

In this particular case, our `reduce` method:
- initiates the `acc` to an empty string `""`
- On each iteration, we append the current value, `char`, repeated twice using a simple call to the `repeat` string method. For example, this will be `"hh"` on the first iteration
- After all the elements in the calling array have been iterated over, we return the value stored at the variable `acc`, which will be `hheelloo"`
- This return value is used to initialize the `result` variable to `"hheelloo"`, which is then logged.


Reduce is a method that returns a single value. In this case, it will be a string. Reduce takes a callback function, and an optional parameter of an *initial value*. In this case, we do receive an argument here: `""`, an empty string. When an initial value is provided, the accumulator is initialized to its value on the first iteration

Reduce's callback function takes two parameters, an accumulator and a current value, in this case, `acc` and `char` respectively. Recuce will iterate over all items in the calling array, where each return value is used to update the accumulator. At the end, `reduce` will return the value of the accumulator, a single value.

In this case, on each iteration the accumulator is appended with the current character `char` repeated twice, and returned. Thus, after all iterations, the return value will be `hheelloo`, which is assigned to `result` and logged.