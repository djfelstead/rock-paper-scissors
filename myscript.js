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

// Check tie
if (computerSelection === playerSelection) {
    console.log('Tie!');
    alert(`Computer: ${computerSelection} \nPlayer: ${playerSelection} \n\nTie!`)
}
// Check computer wins
else if (((computerSelection = 'rock') && (playerSelection = 'scissors')) 
    || ((computerSelection = 'paper') && (playerSelection = 'rock')) 
    || ((computerSelection = 'scissors') && (playerSelection = 'paper'))) {
    console.log('Computer wins!');
    alert(`Computer: ${computerSelection} \nPlayer: ${playerSelection} \n\nComputer wins!`)
}
// Check player wins
else if (((computerSelection = 'rock') && (playerSelection = 'paper'))
    || ((computerSelection = 'paper') && (playerSelection = 'scissors')) 
    || ((computerSelection = 'scissors') && (playerSelection = 'rock'))) {
    console.log('Player wins!');
    alert(`Computer: ${computerSelection} \nPlayer: ${playerSelection} \n\nPlayer wins!`)
}