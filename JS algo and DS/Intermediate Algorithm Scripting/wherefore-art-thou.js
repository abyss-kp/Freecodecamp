function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line

  collection.map(obj => {
    let flag = true
    Object.keys(source).map(key => {
      if (obj[key] !== source[key])
        flag = false
    })
    if (flag)
      arr.push(obj)
  })
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
