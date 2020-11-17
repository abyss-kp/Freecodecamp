function chunkArrayInGroups(arr, size) {
  for(let i=0;i<arr.length;i++){
    // arr.splice(i,0,)
    arr.splice(i,0,arr.splice(i,size))
    console.log(arr)
  }
  return arr
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
