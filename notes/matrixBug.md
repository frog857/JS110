Found (made myself, actually) an interesting bug while trying to refactor a solution to the matrix problem.  SPOILER ALERT, if you wanted to solve this question first before looking at the bug, don't look at the solution.

A student is asked to write a solution to the question: Write a function that transposes a matrix. The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original matrix. 

Explain why the `_transpose` function delivers unexpected results, while the `transpose` function solves the problem as expected.

```javascript
function _transpose(matrix) {
  let newArr = Array(matrix.length).fill([]);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      newArr[j].push(matrix[i][j]);
    }
  }
  return newArr;
}

function transpose(matrix) {
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    newArr.push([]);
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      newArr[j].push(matrix[i][j]);
    }
  }
  return newArr;
}
```