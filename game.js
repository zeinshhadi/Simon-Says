// intializing all variables we need accors the script
let computerSequence = [];
let playerSequence = [];
const greenButton = document.getElementById("green").addEventListener("click", playerClick);
const redButton = document.getElementById("red").addEventListener("click", playerClick);
const yellowButton = document.getElementById("yellow").addEventListener("click", playerClick);
const blueButton = document.getElementById("blue").addEventListener("click", playerClick);
const startButton = document.body.addEventListener("keydown", startGame);
//A function to set an id for each color so we can got the color in return according to id recieved
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
//playing audio according to the color recieved

function playAudio(color) {
   let audio = new Audio(`sounds/${color}.mp3`);
   audio.play();
}

//flashing button used

function flashButton(currentButton) {
   document.getElementById(getColorById(currentButton)).classList.add("pressed");
   setTimeout(() => {
      document.getElementById(getColorById(currentButton)).classList.remove("pressed");
   }, 500);
}

//Adding a new random number between 1 and 4 to computerSequence array and calling it to start

function addToSequence() {
   let newNumberToAdd = Math.floor(Math.random() * 4) + 1;

   computerSequence.push(newNumberToAdd);
   startComputerSequence();
}

//Computer turn started

function startComputerSequence() {
   disableButtonWhenComputerTurn(); //function to disable the click listener of the user when computer turn is running its own turn
   for (let i = 0; i < computerSequence.length; i++) {
      setTimeout(() => {
         flashButton(computerSequence[i]);
         playAudio(getColorById(computerSequence[i]));
      }, i * 1000);
      setInterval(() => {}, computerSequence.length * 1000);
   }
   setTimeout(() => {
      enableButtonWhenPlayerTurn(); //function to enable the click listener of the user when computer turn is over
   }, computerSequence.length * 800);
}

//user turn start whenever he click and event is loaded and sent to its corresponding functions with the id according to color
//by getting the id of the event click which in this case the name of the color as srting
function playerClick(event) {
   let colorSelected = event.target.id;
   if (colorSelected == "green") {
      flashButton(1);
      playAudio(getColorById(1));
      playerSequence.push(1);
   } else if (colorSelected == "red") {
      flashButton(2);
      playAudio(getColorById(2));
      playerSequence.push(2);
   } else if (colorSelected == "yellow") {
      flashButton(3);
      playAudio(getColorById(3));
      playerSequence.push(3);
   } else {
      flashButton(4);
      playAudio(getColorById(4));
      playerSequence.push(4);
   }
   //calling checksequence function will check the user sequence with the computer sequence
   checkSequence();
}

//check sequence will check user input one by one with computer sequence if one dont match is a loss and game will reset,else will call add sequence and continue

function checkSequence() {
   for (let i = 0; i < playerSequence.length; i++) {
      if (playerSequence[i] !== computerSequence[i]) {
         playerSequence[i];
         playAudio("wrong");
         document.body.style.backgroundColor = "red";
         setTimeout(() => {
            document.body.style.backgroundColor = " #011F3F";
         }, 500);

         reset();

         return;
      }
   }
   if (playerSequence.length === computerSequence.length) {
      disableButtonWhenComputerTurn();
      playerSequence = [];
      setTimeout(() => {
         addToSequence();
      }, 1500);
   }
}
//reset function to reset all thing and restart game when you lose
function reset() {
   disableButtonWhenComputerTurn();
   computerSequence = [];
   playerSequence = [];
   setTimeout(() => {
      addToSequence();
   }, 1500);
}
//starting the game after pressing and key on you keyboard
function startGame() {
   if (computerSequence.length == 0) {
      addToSequence();
   }
}
//function that disables event listeners
function disableButtonWhenComputerTurn() {
   let buttons = document.querySelectorAll(".btn");
   buttons.forEach((button) => {
      button.removeEventListener("click", playerClick);
   });
}
//function that enables event listeners
function enableButtonWhenPlayerTurn() {
   let buttons = document.querySelectorAll(".btn");
   buttons.forEach((button) => {
      button.addEventListener("click", playerClick);
   });
}
