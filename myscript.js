// Function to get computer choice of Rock, Paper or Scissors
function getComputerChoice() {
    let ComputerChoice = Math.random();
    if (ComputerChoice >= 0 && ComputerChoice <= 0.33) {
        ComputerChoice = 'Rock';
    } else if (ComputerChoice >= 0.34 && ComputerChoice <= 0.66) {
        ComputerChoice = 'Paper';
    } else {
        ComputerChoice = 'Scissors';
    }
    console.log(ComputerChoice);
    return ComputerChoice;
}

// Function to get player choice of Rock, Paper or Scissors
function getPlayerChoice() {
    let PlayerChoice = prompt('Rock, Paper or Scissors?');
    return PlayerChoice;
}

// Assign computer choice to variable and convert to lower case
let computerSelection = getComputerChoice();
computerSelection = computerSelection.toUpperCase();

// Assign player choice to variable and convert to lower case
let playerSelection = getPlayerChoice();
playerSelection = playerSelection.toUpperCase();

// Check for tie
if (computerSelection === playerSelection) {
    alert(`Tie! ${playerSelection} does not beat ${computerSelection}`);
} 

// Check for computer win
else if (((computerSelection = 'ROCK') && (playerSelection = 'SCISSORS')) 
    || ((computerSelection = 'PAPER') && (playerSelection = 'ROCK')) 
    || ((computerSelection = 'SCISSORS') && (playerSelection = 'PAPER'))) {
    alert(`COMPUTER WINS`);
} 

// Check for player win
else if (((playerSelection = 'ROCK') && (computerSelection = 'SCISSORS')) 
    || ((playerSelection = 'PAPER') && (computerSelection = 'ROCK')) 
    || ((playerSelection = 'SCISSORS') && (computerSelection = 'PAPER'))) {
    alert(`PLAYER WINS!`)
}