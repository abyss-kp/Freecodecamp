function repeatStringNumTimes(str, num) {
  let i=1,string=str;
  while(i++<num)
  str=str+string
  return num<1?"": str;
}

repeatStringNumTimes("abc", 3);
