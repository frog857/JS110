console.log([[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  let newArr = element1.map((element2, idx) => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
  console.log(newArr[2])
  return newArr;
}));



// => [ undefined, undefined ]