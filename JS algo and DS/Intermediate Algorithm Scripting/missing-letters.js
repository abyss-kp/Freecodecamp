function fearNotLetter(str) {
 for(let i=str.charCodeAt(0),j=0;i<str.charCodeAt(str.length-1);i++,j++){
   if(i!==str.charCodeAt(j))
   return String.fromCharCode(i)
 }
 return undefined
}

fearNotLetter("abce");
