
**FILTER**:

The `filter` method is an iterative method that assists in performing selection on collections. `filter` is called on an array instance, with a callback function passed in as an argument, and returns a new array containing *only* elements which meet the selection criteria. On each iteration, the callback function's return value will be used to determine which elements are included in the returned array. For iterations where the callback returns a *truthy* value, the element will be included in the returned array. For *falsy* return values, the element will be omitted. Filter returns a new array, and does not modify the existing array.

---
**MAP:**

The `map` method is an iterative method that assists in performing transformation on collections in Javascript. `map` is called on an array instance, and takes a callback function as an argument. `map` will return an array of the same length as the calling array. Each element in the returned array will be determined by the return value of the callback function on that iteration. The calling array is unchanged.

---
**Reduce**:

The `reduce` method is an iterative method that derives a single value from a collection. The single value can be a primitive or an object. `reduce` is called on an array instance, and takes a callback function. This callback function will take an accumulator, and a current value. A unique feature of `reduce` is how the return value from each iteration is passed in as the next callback invocation's accumulator. 

An optional third argument of an initial value can be passed to the callback. This value is used as the accumulator on the first iteration. If no initial value is supplied, the first element of the calling array is used as the accumulator.

---

**EVERY:**

The `every` method is an iterative method used to test whether all elements in an array pass a test implemented by a provided callback function. It is called on an array instance with a callback function as its argument, and returns a boolean value. On each iteration, the callback function evaluates an element; if the callback returns a _truthy_ value for every element, `every` returns `true`. If the callback returns a _falsy_ value for any element, the method immediately returns `false`. Importantly, the original array remains unchanged.

---

**SOME:**

The `some` method is an iterative method used to test whether at least one element in an array passes a test implemented by a provided callback function. It is called on an array instance with a callback function as its argument, and returns a boolean value. During each iteration, the callback function evaluates an element; if it returns a _truthy_ value for any element, `some` immediately returns `true`. If all iterations result in a _falsy_ value, the method returns `false`. Like other array methods, `some` does not modify the original array.

---

**FILL:**

The `fill` method is used to populate all or part of an array with a static value. It is called on an array instance with the value to fill the array as its first argument, and optionally accepts start and end indices as additional arguments. `fill` iterates over the array starting from the given start index (defaulting to 0) up to, but not including, the end index (defaulting to the array's length), assigning the provided value to each element within that range. This method modifies the original array and then returns it.
