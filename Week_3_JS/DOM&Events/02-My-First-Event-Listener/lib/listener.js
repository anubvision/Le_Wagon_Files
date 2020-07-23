// TODO: React to a click on the button!
//const button = document.querySelector('#clickme');
//document.getElementById('clickme').onclick = function changeColor() {
//document.getElementById('clickme').style = "Background-color: red";}

let button = document.querySelector('button');
let html = document.querySelector('html')

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}
button.onclick = function() {
  button.style.backgroundColor = randomColor();
};

button.onauxclick = function(e) {
  e.preventDefault();
  button.style.color = randomColor();
}

button.oncontextmenu = function(e) {
  e.preventDefault();
}


var myAudio = document.getElementById("audio");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    audio.pause()
  } else {
    audio.play();
  }
};
audio.onplaying = function() {
  isPlaying = true;
};
audio.onpause = function() {
  isPlaying = false;
};

