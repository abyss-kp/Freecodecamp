function diffArray(arr1, arr2) {
return [...arr1,...arr2].filter(itm=>!arr1.includes(itm)||!arr2.includes(itm))
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
