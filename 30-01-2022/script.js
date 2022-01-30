// While Loop
var i = 1;
while (i < 6) {
  document.write(" ", i);
  i++;
}
document.write("<br>");
//print reverse of a number
// var a = parseInt(prompt("Enter number to be reversed: "));
// var b = 0;
// while (a > 1) {
//   b = a % 10;
//   document.write(b, "");
//   a = parseInt(a / 10);
// }

// sum of each digit of number
// var a = parseInt(prompt("Enter number to be reversed: "));
// var b = 0;
// while (a >= 1) {
//   b = (a % 10)+b;
//   a = parseInt(a / 10);
// }
// document.write("sum = ",b);

// factorial
// var a = parseInt(prompt("Enter number to be factorialed: "));
// var b = 1;
// var fact = 1;
// while (b <= a) {
//     fact = fact * b;
//     b++;
// }
// document.write("Factorial = ", fact);

// numbers between 1-1000 divisible by both 3 and 5 but not both
var a = 1,
  b = 0;
while (a < 1000) {
  if (a % 3 == 0 && a % 5 == 0) {
      a++;
      continue;
  }
  if (a % 3 == 0 || a % 5 == 0) {
      b = b + a;
      
    }
    a++;
    
}
document.write("Sum is: ", b);
