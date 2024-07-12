function getComputerChoice() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    console.log(arr[Math.floor(Math.random() * arr.length)]);
}

function getHumanChoice() {
    let humanChoice = prompt('Choose between Rock, paper or Scissors!')
}

getHumanChoice()