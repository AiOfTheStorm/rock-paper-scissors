let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  const choices = ["rock", "paper", "scissors"];

  function getPlayerChoice () {
    let playerInput = prompt("We are playing Rock, Paper, Scissors. Please enter your choice:");

    if (playerInput.toLowerCase() === "rock" || playerInput.toLowerCase() === "paper" || playerInput.toLowerCase() === "scissors") {
      return playerInput.toLowerCase();
    } else {
      alert("Your input is not included in the choices. Try again.");
      return getPlayerChoice();
    }
  }