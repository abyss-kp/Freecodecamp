function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(itm=>itm.length))
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
