window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let r = new window.SpeechRecognition();
r.lang = "en";
r.start();
function onSpeak(e) {
  console.log(e);
}
r.addEventListener("result", onSpeak);
