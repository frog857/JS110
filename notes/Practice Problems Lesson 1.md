What is the return value of the `filter` method call below? Why?
```javascript
[1, 2, 3].filter(num => 'hi');
```

The return value will be `[1, 2, 3]`. `filter()` is an array method that uses a callback function to iterate through an array. On each iteration, if the return value of the callback is truthy, that element will be included in a new array.

In this case, because of arrow function syntax, we have an implicit `return 'hi'` being run on every iteration. A non-empty string is a truthy value, and thus all elements will be included in the returned array.