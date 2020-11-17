function translatePigLatin(str) {
  let vowel = ['a', 'e', 'i', 'o', 'u']
  if (vowel.includes(str[0]))
    str += 'way'
  else {
    while ((/[aeiou]/g).test(str) && !vowel.includes(str[0]))
      str = str.substring(1) + str[0]
    str += 'ay'
  }
  return str;
}

translatePigLatin("consonant");
