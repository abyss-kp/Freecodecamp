const squareList = (arr) => {
  // Only change code below this line
  return arr.reduce((newArr, num) => {
    if (num > 0 && Number.isInteger(num))
      newArr.push(Math.pow(num, 2))
    return newArr
  }, []);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
