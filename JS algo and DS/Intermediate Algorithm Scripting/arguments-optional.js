function addTogether(a, b) {
  if (typeof a !== 'number' || (b !== undefined && typeof b !== 'number'))
    return undefined
  if (b === undefined)
    return function (n) {
      if (typeof n !== 'number')
        return undefined
      return n + a
    }
  return a + b;
}

addTogether(2, 3);
