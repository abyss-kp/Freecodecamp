function sumAll(arr) {
 let small=arr[0]>arr[1]?arr[1]:arr[0]
 let large=arr[0]>arr[1]?arr[0]:arr[1]
 return (large*(large+1)-small*(small-1))/2
}

sumAll([1, 4]);
