function getComputerChoice() {
    let choice = Math.floor(Math.random() * 1000);
    
    if (choice <= 333) {
        console.log('Rock!');
    } else if (choice >= 334 && choice <= 666) {
        console.log('Paper!');
    } else if (choice >= 667) {
        console.log('Scissors!');
    }
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
};

getHumanChoice();