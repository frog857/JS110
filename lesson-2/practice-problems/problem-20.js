// Write a function that takes no arguments and returns a string that contains a UUID.

const hexadecimal = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "a",
  11: "b",
  12: "c",
  13: "d",
  14: "e",
  15: "f"
};



function generateUUID() {
  // output: an 8-4-4-4-12 pattern in string form => 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'
  let first = ""
  for (let i = 0; i < 8; i++) {
    first += generateHexadecimal();
  }

  let second = ""
  for (let i = 0; i < 4; i++) {
    second += generateHexadecimal();
  }

  let third = ""
  for (let i = 0; i < 4; i++) {
    third += generateHexadecimal();
  }

  let fourth = ""
  for (let i = 0; i < 4; i++) {
    fourth += generateHexadecimal();
  }

  let fifth = ""
  for (let i = 0; i < 12; i++) {
    fifth += generateHexadecimal();
  }

  let ID = first + "-" + second + "-" + third + "-" + fourth + "-" + fifth;
  console.log(ID)
}

generateUUID()


function generateHexadecimal() {
  let key = String(Math.floor(Math.random() * 16));
  return hexadecimal[key]
}

