// generate captcha
function captchaGenerator() {
  var arr = ["a", "b", "c", "d", "A", "B", "C", "D"];
  var randomVariable1 = arr[Math.floor(Math.random() * arr.length)];
  var randomVariable2 = arr[Math.floor(Math.random() * arr.length)];
  var randomVariable3 = arr[Math.floor(Math.random() * arr.length)];
  var randomVariable4 = arr[Math.floor(Math.random() * arr.length)];
  var randomVariable5 = arr[Math.floor(Math.random() * arr.length)];
  var totalString =
    randomVariable1 +
    randomVariable2 +
    randomVariable3 +
    randomVariable4 +
    randomVariable5;
  console.log(totalString);
  var totalString2 =
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
    var capp = document.getElementById('userinput').value;
    var capp2 = document.querySelector('input[name="userinput"]');
    console.log(capp,capp2);
    capp.setAttribute("value", totalString2);
}
captchaGenerator();
// check captcha
