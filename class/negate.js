// # & Write a function, `negate`, that converts all `“yes”` words to `"no"` 
// and `"no"` words to `"yes"` in a sentence. The comparison for `"yes"` and `"no"` 
// should be case insensitive.`"yes"` and `"no"` should be negated even if ending with
//  `.`, `?`, `,`, or `!`.

/*
P: Write a function that takes in a string. Returns a string with Yes and No switched.
Yes and Nos are...:
- case insensitive (and case must be returned as well!)
- standalone yes and nos only
- should still be swapped with punctuation appended properly...

IN/OUT: String, string

D: 
Object to swap the properly cased yes and NOs
- {
Yes: No
yes: no
No: Yes
no: yes
}
Regex variable: /\bYes\b|\byes\b|\bNo\b|\bno\b/g

A:
- Declare a regex varaible to search for Yes and No matches with case
- Declare an object, which we will use to replace the matches
- replace all instances of Yes yes No no using
  - at each instance, replace the pattern with the value of the key that matches the pattern

*/

// start time: 12:21 
// end time 12:37

function negate(str) {
  let regex = /\bYes\b|\byes\b|\bNo\b|\bno\b/g;

  let replacements = {
    Yes: "No",
    No: "Yes",
    yes: "no",
    no: "yes"
  }
  
  return str.replaceAll(regex, (match) => replacements[match])
}


console.log(negate("Yes, I said no but now I say yes.")); // "No, I said yes but now I say no."
console.log(negate("no way, yes way!")); // "yes way, no way!"
console.log(negate("Yesterday is not today?")); // "Yesterday is not today?"
console.log(negate("No, I do not know!")); // "Yes, I do not know!"