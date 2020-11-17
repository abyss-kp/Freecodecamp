function mutation(arr) {
  let str1 = arr[0].toLowerCase()
  let str2 = arr[1].toLowerCase()
  // let objMap = {}
  // str1.split("").map(char => objMap[char] = objMap[char] ? objMap[char] + 1 : 1)
  let flag = true
  // str2.split("").map(char => {
  //   if (objMap[char])
  //     objMap[char]--
  //   else
  //     flag= false
  // })
  // return flag
  return [...new Set(str2.split("").map(char => {
    return str1.includes(char)
  }))].length===1
}

mutation(["hello", "hey"]);
