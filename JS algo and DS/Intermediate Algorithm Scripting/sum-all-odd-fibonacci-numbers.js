function sumFibs(num) {
  let sum = 2;
  let f1 = 1;
  let f2 = 1;
  while (f2 <= num) {
    let temp = f1 + f2
    f1 = f2;
    f2 = temp;
    if (f2<=num && f2 % 2 !== 0)
      sum += f2
  }
  return sum;
}

sumFibs(4);
