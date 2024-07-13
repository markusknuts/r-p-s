function getHumanChoice() {
    while (true) { // keeps loop going until valid response is input
    let answer = prompt("Let's play Rock, Paper, Scissors! Please choose one of the following.").toLowerCase(); //case-insensitive prompt to user
    if (answer == "rock" || answer == "paper" || answer == "scissors") { // conditional to allow user to only input the given options
        return answer;
    } else {
        alert('Invalid choice! Please choose either "rock", "paper", or "scissors".');
    }
}
}
// randomly chooses an option for the computer 
function getComputerChoice() {
const choices = ['rock', 'paper', 'scissors']; // set variables in array for computer 
const randomIndex = Math.floor(Math.random() * choices.length); // create random index 
return choices[randomIndex]; // return the random index of choices 
}


function playGame() { // Set main function to run the game and set score variables to 0
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) { // use two parameters (humchoice and comchoice) as arguments for conditionals 
    if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore += 1; //conditional if the human wins, log a string and add one point 
    } else if (computerChoice == "rock" && humanChoice == "scissors" || computerChoice == "paper" && humanChoice == "rock" || computerChoice == "scissors" && humanChoice == "paper") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore += 1; // conditional if the computer wins, log a string and add one point 
    } else {
        console.log("It's a tie!") // if neither conditionals are true, log a string (its a tie)
    }
}

while (humanScore < 5 && computerScore < 5) { // 'while' loop to keep game going until one of the scores reaches 5 
    playRound(getHumanChoice(), getComputerChoice());
}

if (humanScore = 5) { // conditional to end the game once either human or computer score reaches 5 
    console.log("You beat the computer! " + humanScore + " to " + computerScore);
} else if (computerScore = 5) {
    console.log("The computer beat you! " + computerScore + " to " + humanScore);
} else {
    console.log("Nice round! Keep it going!");
}

}

playGame();