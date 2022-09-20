let playerScore = 0;
let computerScore = 0;

// Function to get computer choice of Rock, Paper, Scissors
function getComputerChoice() {
    let ComputerChoice = Math.random();
    if (ComputerChoice >= 0 && ComputerChoice <= 0.33) {
        ComputerChoice = 'ROCK';
    } else if (ComputerChoice >= 0.34 && ComputerChoice <= 0.66) {
        ComputerChoice = 'PAPER';
    } else {
        ComputerChoice = 'SCISSORS';
    }
    console.log(`\nComputer: ${ComputerChoice}`);
    return ComputerChoice;
}

// Function to get player choice of Rock, Paper, Scissors
function getPlayerChoice() {
    let playerChoice = prompt('Rock, Paper or Scissors?');
    playerChoice = playerChoice.toUpperCase();
    console.log(`Player: ${playerChoice}`);
    return playerChoice;
}

// Function to play one round of Rock, Paper, Scissors
function playRound(computerSelection, playerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    if (computerSelection === playerSelection) {
        console.log(`Tie`);
    } 
// Check for computer win
    else if (((computerSelection === 'ROCK') && (playerSelection === 'SCISSORS')) 
        || ((computerSelection === 'PAPER') && (playerSelection === 'ROCK')) 
        || ((computerSelection === 'SCISSORS') && (playerSelection === 'PAPER'))) {
        computerScore++;
        console.log(`Computer wins`);
    } 
// Check for player win
    else if (((playerSelection === 'ROCK') && (computerSelection === 'SCISSORS')) 
        || ((playerSelection === 'PAPER') && (computerSelection === 'ROCK')) 
        || ((playerSelection === 'SCISSORS') && (computerSelection === 'PAPER'))) {
        playerScore++;
        console.log(`Player wins`)
    }
}

// Function to play 5 rounds of Rock, Paper, Scissors and declare overall winner
function game() {
    for (i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        console.log(`\nPlayer wins by ${playerScore} rounds to ${computerScore}`);
    }
    else if (computerScore > playerScore) {
        console.log(`\nComputer wins by ${computerScore} rounds to ${playerScore}`);
    }
    playerScore = 0; // reset playerScore counter
    computerScore = 0; // reset computerScore counter
}

game();