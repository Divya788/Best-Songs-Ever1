function CallToAction(){
  window.location = "https://best-songs-ever.divyasreechama.repl.co/";
  window.open("https://www.wevideo.com/view/2199876184", '_blank');
}
function displaySubmitMessage() {
  let nameVal = document.getElementById("name").value;
  let message = "Thank you, " + nameVal + ", for submitting this form! I appreciate your feedback!";
  document.getElementById("showMessage").innerHTML = message;
  event.preventDefault();
}