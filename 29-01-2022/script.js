console.log("This is console.");

// JS VARIABLES
var a = 10;
document.getElementById("one").innerText = a;

var b = 11.113;
console.log(b);

var c = "deepansh";
console.log(c);

console.log(a + b);
console.log(c + a);

// JS OPERATORS

// 1. Arithmatic operators: +,-,*,/,%,**
// 2. Relational Operators: >, <, >=, <=, ==, ===, !=
// === operator checks value as well as type of data, then provide boolean result
console.log(10 === "10");

// Logical Operators: &, |, &&, ||
console.log(a & 2);

// Assignment or Compound Operators: =, +=, -=, *=, /=, %=, **=
console.log((a += 5));

// Ternary Operator: ?  :
console.log(a > b ? "a = " + a : "b = " + b);

console.log("++a = " + ++a);

//Logical Demo Questions
// Fibbonacci Series Strating with 1,2,3,5,8 ...
// Print sum of numbers from fabbonacci series which are divisible by 2 from 1 to 4 million

var c = 0,
  d = 1,
  sum = 0,
  e = 1;
while(d<4000000) {
  d = e + c;
  e = c;
  c = d;
  document.write(d + "<br>");
  if (d % 2 === 0) {
    sum += d;
  }
}
document.write("sum = "+sum);
