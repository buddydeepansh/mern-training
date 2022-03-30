// strings
let s1 = "deepansh";
let s2 = "Deepansh";
let s3 = `Deepansh
${s1}
Deepansh
Agrawal`;
console.log(s1);
console.log(s2);
console.log(s3);
console.log(typeof s3);

console.log(s3.length);

// indexing in strings
console.log(s3[0]);

// charAt()
console.log(s3.charAt(1));

// looping in string
for (const iterator of s3) {
  console.log(iterator);
}

// Strings are immutable
let s4 = "Indore";
s4[0] = "d";
console.log(s4);

// toUpperCase()
console.log(s4.toUpperCase());

// toLowerCase()
console.log(s4.toLowerCase());

// indexOf()
console.log(s4.indexOf("o"));
// the below line will search for character e after index 2 in the string s3.
console.log(s3.indexOf("e", 2));

// includes()
console.log(s3.includes("Deepansh"));

// startsWith()
console.log(s3.startsWith("deepansh"));
console.log(s3.startsWith("Deepansh"));

// endsWith()
console.log(s3.endsWith("Deepansh"));
console.log(s3.endsWith("Agrawal"));

// slice : return the particular substring from start to (end index-1)
let s5 = `let s5 be slice.`;
console.log(s5.slice(2, 9));
console.log(s5.slice(4, 5));
console.log(s5.slice(4)); // return substring from 4 index to last index

// codePointAt() :UTF-16     ,         charCodeAt(): UNICODE
console.log(s5.codePointAt(7));
console.log(s5.charCodeAt(7));
console.log(String.fromCodePoint(90)); // return char from utf-16 code

// split()
let s6 = "I am from indore";
console.log(s6.split(""));
console.log(s6.split(" "));

//Q1. $ insert dollar in string if a character is repeated in the string.
// example: level -> lev$$
function clicked() {
  var inp = document.querySelector("#input1").value;
  let v2 = inp.split("");
  console.log(v2);
  for (let i = 0; i < inp.length; i++) {
    for (j = 1; j < inp.length; j++) {
      if (v2[i] == v2[j]) {
        v2[j] = "$";
      }
    }
  }
  console.log(v2);
}
//Q2. return sum of integers from string
// example: "1+2+3+4+5" = 15

//Q3. WAPT reverse a string word by word.
// example: "this is an apple." => ".apple an is this"

//Q4. "indore" => "inre"
// "abc" => "abbc"
