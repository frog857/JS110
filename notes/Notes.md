
`Object.keys(someObj).includes('test')` is the same as doing `Object.hasOwnProperty('test')`

`Array.prototype.reverse()` is destructive

Arrays can take additional properties, but they are not *elements*, which are standard array entries... Object methods with affect these new props, but not Array methods.

Declaration and Dec + Init return `undefined`. Reassignment however, returns the result of the expression on the right-hand side of the `=` reassignment operator