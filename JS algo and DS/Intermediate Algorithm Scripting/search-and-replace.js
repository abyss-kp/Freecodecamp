function myReplace(str, before, after) {
  if(before[0]===before[0].toUpperCase())
  after=after[0].toUpperCase()+after.substring(1)
  else
  after=after.toLowerCase()
  let regex = new RegExp(`${before}`,'g')
  str=str.replace(regex, after);
  return str
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
