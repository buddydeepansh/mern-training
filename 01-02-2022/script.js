// do-while loop & for loop
for (let j = 0; j < 6; j++) {
  do {
    document.write(j + " ");
  } while (j++ <= 5);
}

document.write("<br>");
document.write("<br>");

// arrays
var arr = [10, 20, 15, 56];
for (let i = 0; i < arr.length; i++) {
  document.write(arr[i] + " ");
}

// functions
function demofun() {
  var z = document.getElementById("uname");
  z = z.value.toUpperCase();
  console.log(z);
  document.getElementById("para").innerHTML = z;
}

//JSON
// s= {"name":"Deepansh"
//      , "marks":95,}
// json file contains data in the form of key-value pairs.