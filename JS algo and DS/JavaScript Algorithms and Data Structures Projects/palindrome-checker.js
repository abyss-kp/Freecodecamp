function palindrome(str) {
  str=str.toLowerCase()
  str=str.split(/[^a-z0-9]/g).join("")
  // str=str.replace(/^[a-z0-9]/g,"")
  return str===str.split("").reverse().join("");
}



palindrome("eye");
