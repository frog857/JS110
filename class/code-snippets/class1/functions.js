// what will the following code log to the console. Why?

let exp = num1 => num2 => num1 ** num2;

let multiply = (num1, num2) => num1 * num2;

console.log(multiply(exp(2)(2), 3));

