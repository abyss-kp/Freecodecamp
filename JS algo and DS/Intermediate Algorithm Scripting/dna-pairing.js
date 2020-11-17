function pairElement(str) {
  let objMap={
    'A':'T',
    'G':'C',
    'C':'G',
    'T':'A'
  }
  
  return str.split("").map(char=>[char,objMap[char]]);
}

pairElement("GCG");
