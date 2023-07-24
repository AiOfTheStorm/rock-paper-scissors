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

  function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
      return "It is a draw! Try again.";
      playRound(playerSelection, computerSelection);
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      ++playerScore;
      return `VICTORY, ${playerSelection} won against ${computerSelection}!`;
    } else if (
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "rock" && computerSelection === "paper")
    ) {
      ++computerScore;
      return `DEFEATED, ${playerSelection} lost to ${computerSelection}!`;
    }
  }

  function game () {
    console.log(`ROUND 1: ${playRound(playerSelection, computerSelection)}`);
    console.log(`ROUND 2: ${playRound(playerSelection, computerSelection)}`);
    console.log(`ROUND 3: ${playRound(playerSelection, computerSelection)}`);
    console.log(`ROUND 4: ${playRound(playerSelection, computerSelection)}`);
    console.log(`ROUND 5: ${playRound(playerSelection, computerSelection)}`);
      getFinalScore();
      return "Thanks for playing the game!";
    }

    function getFinalScore () {
        if (playerScore > computerScore) {
          console.log(`%cYou WON against the computer. CONGRATULATIONS!\nFINAL RESULTS: ${playerScore} vs ${computerScore}`, `color: green`);
        } else if (playerScore < computerScore) {
          console.log(`%cOh no! You LOST. Want to try your luck again?\nFINAL RESULTS: ${playerScore} vs ${computerScore}`, `color: red`);
        } else if (playerScore === computerScore) {
          console.log(`%cTOUGH GAME! It's a draw.\nFINAL RESULTS: ${playerScore} vs ${computerScore}`, `color: yellow`);
        }
      }
      
      game();