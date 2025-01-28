/*
Create a function that returns true if the given circular areas are intersecting, otherwise return false. The circles are given as two arrays containing the values in the following order:

Radius of the circle.
Center position on the x-axis.
Center position on the y-axis.

Notes
You can expect useable input and positive radii.
The given coordinates are the centers of the circles.
We are looking for intersecting areas, not intersection outlines.
Check the Resources tab for help.

P: input is two array representing circle position and radius
output is boolean indicating whether there is intersecting area

rules: 
- d = sqrt((x2 - x1)^2 + (y2 - y1)^2), where (x1, y1) is the center of the first circle, (x2, y2) is the center of the second circle, and "d" is the distance between their centers; 
- if d is less than the sum of the radii, the circles intersect

D:
- integer to represent the ditance between the centers of the circles
- integer to represent the sum of the radii

A:
- declare a variable to store sum of the radii
- calculate the distance between the centers of the circle using formula
- return !!sumRadii - distance;

*/

function isCircleCollision(arr1, arr2) {
  let sumRadii = arr1[0] + arr2[0];

  let differenceX = arr2[1] - arr1[1];
  let differenceY = arr2[2] = arr1[2];
  let distanceBetweenCenters = Math.sqrt((differenceX ** 2) + (differenceY ** 2));
  
  return sumRadii - distanceBetweenCenters > 0;
}


console.log(isCircleCollision([10, 0, 0], [10, 10, 10]))// ➞ true
console.log(isCircleCollision([1, 0, 0], [1, 10, 10]))// ➞ false