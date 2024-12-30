function calculateLeftoverBlocks(totalBlocks) {
  let leftoverBlocks = totalBlocks;
  let currentLayer = 1;
  
  while (leftoverBlocks >= currentLayer**2) {
    leftoverBlocks -= currentLayer**2;
    currentLayer += 1;
  }

  return leftoverBlocks;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true 1x1 (1), 
console.log(calculateLeftoverBlocks(5) === 0); //true 1x1 (1), 2x2(4) 5 total, 5-5 = 1
console.log(calculateLeftoverBlocks(6) === 1); //true 1x1 (1), 2x2(4) 5 total, 6-5 = 1
console.log(calculateLeftoverBlocks(14) === 0); //true 1x1 (1), 2x2 (4), 3x3 (9). 14 total 14-14 = 0 leftover