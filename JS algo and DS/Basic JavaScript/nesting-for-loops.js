function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  arr.map(itm => {
    if (Array.isArray(itm)) itm.map(i => product *= i)
    else
      product *= itm
  }
  )
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
