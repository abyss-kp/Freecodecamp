function steamrollArray(arr) {
  let ans = []
  function flattern(arr) {
      if(!arr.length)
      return
    if (Array.isArray(arr[0]))
      flattern(arr[0])
      else
 ans.push(arr[0])
 return   flattern(arr.slice(1))
  }
  flattern(arr)
  return ans;
}

steamrollArray([1, [2], [3, [[4]]]]);
