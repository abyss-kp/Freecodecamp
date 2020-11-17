function sumPrimes(num) {
  let sum = 10;
  for (let i = 6; i <= num; i++) {
    if (isPrime(i))
      sum += i
  }
  function isPrime(n){
    if (n <= 1)
      return false;
    if (n <= 3)
      return true;
    if (n % 2 == 0 ||
      n % 3 == 0)
      return false;

    for (let i = 5;
      i * i <= n; i = i + 6)
      if (n % i == 0 ||
        n % (i + 2) == 0)
        return false;
    return true;
  }
  return sum;
}

sumPrimes(10);
