//object literals
let person1 = {
  fname: "Deepansh",
  lname: "Agrawal",
  age: 22,
};
let person2 = {
  fname: "abhas",
  lname: "malware",
  age: 20,
};
let person3 = {
  fname: "anand",
  lname: "grg",
  age: 21,
};
console.log(person1);
console.log(person1 == person2);
console.log(person1 === person2);

// object class
console.log(Object.is(person1, person2));

// contructor function
function Person(x, y, z) {
  this.firstname = x;
  this.lastname = y;
  this.age = z;
}

// new keyword

let p1 = new Person("deepansh", "agrawal", 23);
console.log(p1);
