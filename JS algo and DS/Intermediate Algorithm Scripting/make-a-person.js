var Person = function (firstAndLast) {
  // Only change code below this line
  var name = firstAndLast
  // Complete the method below and implement the others similarly
  this.getFullName = function () {
    return name
  };
  this.getFirstName = function () {
    return name.split(" ")[0];
  };
  this.getLastName = function () {
    return name.split(" ")[1];
  };
  this.setFirstName = function (first) {
    name = first +" "+ name.split(" ")[1];
  };
  this.setLastName = function (second) {
    name = name.split(" ")[0] +" "+ second;
  };
  this.setFullName = function (fullName) {
    name = fullName;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
