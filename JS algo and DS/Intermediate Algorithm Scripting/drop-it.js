function dropElements(arr, func) {
  let i = 0;
  while (i < arr.length) {
    if (func(arr[i]))
      return arr.splice(i)
    i++;
  }
  return arr.splice(i)
}

dropElements([1, 2, 3], function (n) { return n < 3; });
