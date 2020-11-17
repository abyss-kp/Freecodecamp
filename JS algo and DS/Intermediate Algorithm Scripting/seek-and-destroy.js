function destroyer(arr,...rest) {
  return arr.filter(itm=>!rest.includes(itm));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
