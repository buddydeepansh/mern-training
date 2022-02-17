// Function statements
alpha();
function alpha() {
  let y = 10;
  console.log("y: " + y);
  return y + 5;
}
let a = alpha();
console.log("a : " + a);
//in above case there occurs a problem called hosting where without
//previous decalartion of function if a function is called then it
//searches within whole file for function and gives output.

// function expression
//beta(); // here it will give error as the function is not yet initialized.
let beta = function () {
  let y = 10;
  console.log("y in function expression: " + y);
  return y + 5;
};
beta(); // this will work properly.
console.log(beta);
console.log(typeof beta);

// argument function expression
let beta1 = function (a, b) {
  let y = a + b;
  console.log("y in argument function expression: " + y);
  //return y + 5;
  return y;
};
beta1(10, 20); // this will work properly.
console.log("argument function expression:" + beta1);

// single line arrow function
// in single line arrow function we donot use return statement, it by default return the value.
let gamma = (x, y) => x + y;
console.log("single line arrow function gamaa: " + gamma(4, 5));

let gamma1 = () => a + b;
//console.log("single line arrow function gamaa1: " + gamma1(4, 4));

let gamma3 = (n) => n * n;
console.log("single line arrow function gamaa3: " + gamma3(5));

//let age = prompt("Enter your age:");

//let gamma4 = age > 18 ? () => console.log(age * age) : () => console.log(age);

//gamma4();

//multi line arrow function
// here we will use multiple lines in arrow function.

let delta = () => {
  let r = 10;
  console.log("Delta function r: " + r);
  return r * 2;
};
console.log(delta());
