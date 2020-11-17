function getIndexToIns(arr, num) {
  arr.sort((a,b)=>a-b)
  let i=0;
  while(arr[i]<num)
  i++
  return i;
}

getIndexToIns([40, 60], 50);
