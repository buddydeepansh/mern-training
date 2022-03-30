// array

let a1 = [1, 2, 3, 4, 5];
console.log(a1);

let a2 = new Array(11, 22, 33, 44, 55, "Array 2", 23.678, true, false); // less used
console.log(a2);
console.log(a2[3]);

let a3 = a2;
a3[0] = 111;
console.log(a3);

let a4 = [
  function () {
    console.log("a4 array");
  },
];
a4[0]();

//stack

let a5 = [111, 222, 333, 444, "aaa"];
a5.push("bbb");
console.log(a5);
a5.pop();
console.log(a5);

// queue

// Shift in queue
let a6 = ["orange", "mango", "apple"];
console.log(a6);
a6.shift();
console.log(a6);

// Unshift in queue
a6.unshift("banana");
a6.unshift("banana2");
console.log(a6);

// loops
// 1. for loop
for (let x = 0; x < a6.length; x++) {
  console.log(`for loop: ${a6[x]}`);
}

// 2. for in loop
for (const key in a6) {
  console.log(`for in loop: ${a6[key]}`);
}

// 3. for each loop
a6.forEach((element) => {
  console.log(`for each loop: ${[element]}`);
});
a6.forEach((item, index, array) => {
  console.log(item);
});

// methods
// 1. splice()

console.log(a6);
a6.splice(2, 0, "inserted1", "insertted 2");
console.log("splice: " + a6);

// 2. slice()
console.log(a6.slice(1, 4));
console.log(a6.slice(-3, -2));

// 3. concat()
console.log(`concat 2 arrays: ${a6.concat(a2)}`);

// 4. indexOf()
console.log(a6.indexOf("banana"));

// 5. include()
console.log(a6.includes("banana"));

// 6. find()
let a7 = [
  { id: 1, name: "deepansh" },
  { id: 2, name: "sh" },
  { id: 3, name: "nsh" },
];
console.log(a7.find((i) => i.id == 2));
console.log(a7.find((i) => i.id == 2).name);

// 7. filter()
console.log(a7.filter((i) => i.id >= 1 && i.id < 3));

// 8. isArray()
console.log("isArray(): " + Array.isArray(a6));
