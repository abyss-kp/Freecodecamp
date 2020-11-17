function uniteUnique(arr) {
  let array=[]
  for(let key in arguments){
    array.push(...arguments[key])
  }
  return [...new Set(array)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
