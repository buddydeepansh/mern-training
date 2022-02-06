var n1 = "",
  n3 = "";
function display(n2) {
  n1 = n1 + n2;
  document.querySelector("#display").setAttribute("value", n1);
}
function equals() {
  n3 = eval(n1);
  document.querySelector("#display").setAttribute("value", n3);
  n1 = n3;
}
function clearAll()
{
  document.querySelector("#display").setAttribute("value", "");
  n1 = "";
  n2 = "";
  n3 = "";
}