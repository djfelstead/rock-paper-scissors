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
}

let computerSelection = getComputerChoice();
let playerSelection = prompt('Rock, Paper or Scissors?');

