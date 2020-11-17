function rot13(str) {
  let strArr = str.split("")
  let res = ''
  strArr.map(itm => {
    let charCode = itm.charCodeAt(0)
    if (65 <= charCode && charCode <= 90) {
      let i = (charCode + 13-65) % 26
      res += String.fromCharCode(65 + i)
    }
    else res += itm
  })
  return res;
}

rot13("SERR PBQR PNZC");
