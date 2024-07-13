let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 1000);
    
    if (choice <= 333) {
        console.log('Computer chooses Rock!');
    } else if (choice >= 334 && choice <= 666) {
        console.log('Computer chooses Paper!');
    } else if (choice >= 667) {
        console.log('Computer chooses Scissors!');
    };

    return choice;
};

function getHumanChoice() {
    let choice2 = prompt('Choose between Rock, Paper or Scissors!');
    if (choice2.toLowerCase() === 'rock') {
        choice2 = 0;
    } else if (choice2.toLowerCase() === 'paper') {
        choice2 = 1;
    } else if (choice2.toLowerCase() === 'scissors') {
        choice2 = 2;
    } else {
        console.log('Wrong input. Reload the page and try again!');
    }

    return choice2;
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 0 && computerChoice <= 333) {
        console.log('It is a tie!');
    } else if (humanChoice === 0 && computerChoice >= 334 && computerChoice <= 666) {
        console.log('You loose! Paper beats Rock!');
        computerScore = computerScore + 1;
    } else if (humanChoice === 0 && computerChoice >= 667) {
        console.log('You win! Rock beats Scissors');
        humanScore = humanScore + 1;
    }
    console.log(humanScore);
    console.log(computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

 


