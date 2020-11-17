function findElement(arr, func) {
  return arr.find(num=>func(num));
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
