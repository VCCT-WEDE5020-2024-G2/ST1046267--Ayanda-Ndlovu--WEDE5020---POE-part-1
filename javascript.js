var currentDate = new Date().toDateString();
var date = document.getElementById("dateDiv");

document.getElementById("dateDiv").innerHTML = currentDate;

function dogSound() {
  var audio = new Audio("mp3/dog.mp3");
  audio.play();
  
  var element = document.getElementById("dogImg");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
function catSound() {
  var audio = new Audio("mp3/cat.mp3");
  audio.play();

  var element = document.getElementById("catImg");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
function horseSound() {
  var audio = new Audio("mp3/horse.mp3");
  audio.play();

  var element = document.getElementById("horseImg");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
