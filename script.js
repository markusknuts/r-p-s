const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissors");
const outcomeDiv = document.querySelector(".outcome")
const playerScoreSpan = document.querySelector(".player-score")
const computerScoreSpan = document.querySelector(".computer-score")

let compScore = 0;
let humanScore = 0;


// randomly chooses an option for the computer 
function getComputerChoice() {
const choices = ['rock', 'paper', 'scissors']; // set variables in array for computer 
const randomIndex = Math.floor(Math.random() * choices.length); // create random index 
return choices[randomIndex]; // return the random index of choices 
}


const playRound = (playerSelection, computerSelection) => {
    
    if (playerSelection === computerSelection) {
        const p = document.createElement("p")
        p.textContent = 'it is a tie'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        const p = document.createElement("p")
        p.textContent = 'You loose! Paper beats Rock'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        humanScore++
        const p = document.createElement("p")
        p.textContent = 'Yoy Win! Rock beats Scissors'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        humanScore++
        const p = document.createElement("p")
        p.textContent = 'You win! Paper beats Rock'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        const p = document.createElement("p")
        p.textContent = 'You loose Scissors beats Paper'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        const p = document.createElement("p")
        p.textContent = 'Yoy loose Rock beats Scissors'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        humanScore++
        const p = document.createElement("p")
        p.textContent = 'Yoy win! Scissors beats Paper'
        outcomeDiv.appendChild(p)
    }

    
}

const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement("h2")
        h2.innerText = "You Won"
        outcomeDiv.append(h2)
    } else if (computerScore === 5) {
        const h2 = document.createElement("h2")
        h2.innerText = "You lost!"
        outcomeDiv.append(h2)
    }

}

const updateScores = (humanScore, computerScore) => {
    playerScoreSpan.innerText = `Player score: ${humanScore}`
    computerScoreSpan.innerText = `Computer score: ${computerScore}`
}

rockBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const humanSelection = 'rock';
    playRound(humanSelection, computerSelection)
    updateScores(humanScore, compScore)
    checkForWinner(humanScore, compScore)
})

paperBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const humanSelection = 'paper';
    playRound(humanSelection, computerSelection)
    updateScores(humanScore, compScore)
    checkForWinner(humanScore, compScore)
})

scissorBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const humanSelection = 'scissors';
    playRound(humanSelection, computerSelection)
    updateScores(humanScore, compScore)
    checkForWinner(humanScore, compScore)
})