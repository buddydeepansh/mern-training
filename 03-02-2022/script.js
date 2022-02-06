// generate captcha
var totalString, totalString2;
function captchaGenerator() {
  var arr = ["a", "b", "c", "d", "A", "B", "C", "D"];
  var randomVariable1 = arr[Math.floor(Math.random() * arr.length)];
  var randomVariable2 = arr[Math.floor(Math.random() * arr.length)];
  var randomVariable3 = arr[Math.floor(Math.random() * arr.length)];
  var randomVariable4 = arr[Math.floor(Math.random() * arr.length)];
  var randomVariable5 = arr[Math.floor(Math.random() * arr.length)];
  totalString =
    randomVariable1 +
    randomVariable2 +
    randomVariable3 +
    randomVariable4 +
    randomVariable5;
  console.log(totalString);
  totalString2 =
    randomVariable1 +
    " " +
    randomVariable2 +
    " " +
    randomVariable3 +
    " " +
    randomVariable4 +
    " " +
    randomVariable5;
  console.log(totalString2);

  var capp = document.getElementById("userinput");
  capp.setAttribute("value", totalString2);
}
captchaGenerator();

// check captcha
function checkCaptcha() {
  var inputt = document.getElementById("inputCaptcha").value;
  if (inputt === totalString) {
    alert("Correct Captcha is Entered");
    captchaGenerator();
    document.getElementById("inputCaptcha").value = "";
  } else {
    alert("Incorrect Captcha is Entered");
    captchaGenerator();
    document.getElementById("inputCaptcha").value = "";
  }
}
