
// Function to get computer choice of Rock, Paper or Scissors
function getComputerChoice() {
    let ComputerChoice = Math.random();
    if (ComputerChoice >= 0 && ComputerChoice <= 0.33) {
        ComputerChoice = 'ROCK';
    } else if (ComputerChoice >= 0.34 && ComputerChoice <= 0.66) {
        ComputerChoice = 'PAPER';
    } else {
        ComputerChoice = 'SCISSORS';
    }
    console.log(`Computer: ${ComputerChoice}`);
    return ComputerChoice;
}

// Function to get player choice of Rock, Paper or Scissors
function getPlayerChoice() {
    let playerChoice = prompt('Rock, Paper or Scissors?');
    playerChoice = playerChoice.toUpperCase();
    console.log(`Player: ${playerChoice}`);
    return playerChoice;
}

// Assign computer choice to variable and convert to lower case
let computerSelection = getComputerChoice();
computerSelection = computerSelection.toUpperCase();

// Assign player choice to variable and convert to lower case
let playerSelection = getPlayerChoice();
playerSelection = playerSelection.toUpperCase();

// Check for tie
if (computerSelection === playerSelection) {
    console.log(`\nTIE!`);
} 

// Check for computer win
else if (((computerSelection === 'ROCK') && (playerSelection === 'SCISSORS')) 
    || ((computerSelection === 'PAPER') && (playerSelection === 'ROCK')) 
    || ((computerSelection === 'SCISSORS') && (playerSelection === 'PAPER'))) {
    console.log(`\nCOMPUTER WINS!`);
} 

// Check for player win
else if (((playerSelection === 'ROCK') && (computerSelection === 'SCISSORS')) 
    || ((playerSelection === 'PAPER') && (computerSelection === 'ROCK')) 
    || ((playerSelection === 'SCISSORS') && (computerSelection === 'PAPER'))) {
    console.log(`\nPLAYER WINS!`)
}