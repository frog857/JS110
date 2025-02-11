
```Javascript



```


This function is using nested iteration to log characters in the string elements of the array. The desired outcome is to log each character in each word exactly once. This can be achieved with nested iteration.

The first loop will loop over the words in the array. We use index `i` to access each word in the passed in `array` object. The code explicitly writes `let word = array[i]` to make it clearer to the interpreter.  We then run an inner loop using index `j`, which  uses the stopping condition `j < word.length` to effectively "loop over the word" and access each character.

At this point, we have all the access we need to log each letter (inner loop) of the word (outer loop). However, there is a bug in the code `console.log(word[i])` According to our reasoning in the previous paragraph, `j` is the variable that we should use if we want to access the characters in the word. If we change this line to  `console.log(word[j])`, we will get the desired output.



```Javascript
function logLetters(array) {

for (let i = 0; i < array.length; i++) {

let word = array[i];

for (let j = 0; j < word.length; j++) {

console.log(word[j]);

}

  

}

}

  

logLetters(words);


```



