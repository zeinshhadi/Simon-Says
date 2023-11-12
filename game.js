let computerSequence = [];
let playerSequence = [];
//   for (let i = 0; i <= computerSequence.length; i++) {}
let greenButton = document.getElementById("green").addEventListener("click", playerClick);
let redButton = document.getElementById("red").addEventListener("click", playerClick);
let yellowButton = document.getElementById("yellow").addEventListener("click", playerClick);
let blueButton = document.getElementById("blue").addEventListener("click", playerClick);

function playAudio(color) {
   let audio = new Audio(`sounds/${color}.mp3`);

   audio.play();
}
function flashButton(currentButton) {
   document.getElementById(getColorById(currentButton)).classList.add("pressed");
   setTimeout(() => {
      document.getElementById(getColorById(currentButton)).classList.remove("pressed");
   }, 500);
}

function getColorById(id) {
   switch (id) {
      case 1:
         return "green";
      case 2:
         return "red";
      case 3:
         return "yellow";
      case 4:
         return "blue";
   }
}

function addToSequence() {
   let newNumberToAdd = Math.floor(Math.random() * 4) + 1;
   computerSequence.push(newNumberToAdd);
   startComputerSequence();
}

function startComputerSequence() {
   for (let i = 0; i < computerSequence.length; i++) {
      setTimeout(() => {
         flashButton(computerSequence[i]);
         playAudio(getColorById(computerSequence[i]));
      }, i * 1000);
   }
}

function playerClick() {
   flashButton(1);
   playAudio(getColorById(1));
}
addToSequence();
