let computerSequence = [];
let playerSequence = [];
//   for (let i = 0; i <= computerSequence.length; i++) {}
let greenButton = document.getElementById("green").addEventListener("click", playerClick);
let redButton = document.getElementById("red").addEventListener("click", playerClick);
let yellowButton = document.getElementById("yellow").addEventListener("click", playerClick);
let blueButton = document.getElementById("blue").addEventListener("click", playerClick);
let startButton = document.getElementById("start").addEventListener("click", startGame);

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
   console.log(`computer sequence = ${computerSequence}`);
   console.log(`player sequence = ${playerSequence}`);
   for (let i = 0; i < computerSequence.length; i++) {
      setTimeout(() => {
         flashButton(computerSequence[i]);
         playAudio(getColorById(computerSequence[i]));
      }, i * 1000);
   }
}

function playerClick(event) {
   let colorSelected = event.target.id;
   if (colorSelected == "green") {
      flashButton(1);
      playAudio(getColorById(1));
      playerSequence.push(1);
      checkSequence(1);
      console.log(typeof 1);
   } else if (colorSelected == "red") {
      flashButton(2);
      playAudio(getColorById(2));
      playerSequence.push(2);
      checkSequence(2);
   } else if (colorSelected == "yellow") {
      flashButton(3);
      playAudio(getColorById(3));
      playerSequence.push(3);
      checkSequence(3);
   } else {
      flashButton(4);
      playAudio(getColorById(4));
      playerSequence.push(4);
      checkSequence(4);
   }
   console.log(`player sequence = ${playerSequence}`);
}

function checkSequence() {
   for (let i = 0; i < playerSequence.length; i++) {
      if (playerSequence[i] !== computerSequence[i]) {
         playAudio("wrong");
         console.log(`wrong interrupt`);

         reset();
         return;
      }
   }
   if (playerSequence.length === computerSequence.length) {
      playerSequence = [];
      setTimeout(() => {
         console.log(`correct interrupt`);
         addToSequence();
      }, 1500);
   }
}

function reset() {
   computerSequence = [];
   playerSequence = [];
   setTimeout(() => {
      startComputerSequence();
   }, 1500);
}

function startGame() {
   addToSequence();
}
