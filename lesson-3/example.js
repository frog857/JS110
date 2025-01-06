function joinOr(arr, punctuation = ", ", word = "or") {
 let outputStr = "";
 if (arr.length === 1) return String(arr[0]);
 if (arr.length === 2) return `${String(arr[0])} ${word} ${String(arr[1])}`;
 arr.forEach((el, idx) => {
  if (idx !== arr.length - 1) {
    outputStr += String(arr[idx]) + punctuation;
  } else if (idx === arr.length - 1) {
    outputStr += word + " " + String(arr[idx]);
  }
 })
 return outputStr;
}

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"