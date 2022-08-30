"use strict";

document.addEventListener("DOMContentLoaded", initLoop);
// variables for counter, text:
let counter = -1;
const string = document.querySelector("#typewriter").innerHTML;
const lengthOfString = string.length - 1;
// remove text from H1/#typewriter:
document.querySelector("#typewriter").innerHTML = " ";

initLoop();

function initLoop() {
  console.log("func initLoop loaded");
  loop();
}

function loop() {
  console.log("loop func loaded");
  if (counter < lengthOfString) {
    counter++; // counter adds 1 each time
    console.log(counter);
    document.querySelector("#typewriter").innerHTML += string[counter]; // adds one letter based on counter number
    setTimeout(loop, 700); // sets delay to 2 milli seconds
  } else {
    console.log("It's over");
    location.reload();
  }
}
